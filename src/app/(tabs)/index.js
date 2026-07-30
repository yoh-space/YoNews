import { useState, useEffect } from "react";
import { StyleSheet, View, Alert, FlatList, Text, Pressable } from "react-native";
import Date from "../../components/date";
import useTheme from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import Icon from "../../components/icon";
import Chips from "../../components/chips";
import SearchInput from "../../components/searchInput";
import Card from "../../components/card";
import ListView from "../../components/listView";
import DATA from "../../data/data";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const { colors, fSize, spacing, toggleTheme, themeMode } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const Name = themeMode === "light" ? "moon-outline" : "sunny-outline";
  const articles = useQuery(api.articles.getAllArticles);
  const categories = useQuery(api.categories.getAllCategories)
  const [ selectedCategory, setSelectedCategory] = useState();
  const [newCat, setNewCat] = useState([]);
  const AllCategories = {
    _id: "all",
    categoryName: "All",
  }
  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory("All");
      const newCat = [AllCategories, ...categories]
      setNewCat(newCat);

    }
  }, [categories]);

  const filteredArticles = selectedCategory === "All" ? articles : articles?.filter((article) => article.categoryName === selectedCategory)

  const notification = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };
  const heroNews = filteredArticles?.[0];
  const ListHeader = () => (
    <View style={styles.headerText}>
      <Text style={{ fontSize: fSize.newsListTitle , fontFamily: 'Syne_700Bold'}}>Latest Stories</Text>
      <Pressable onPress={() => {
        // Handle "See all" press action here
        alert("See all pressed");
      }}>
      <Text style={{ fontSize: fSize.tagLabel , fontFamily: 'Syne_400Bold', color: colors.accentPrimary}}>See all</Text>
      </Pressable>
    </View>
  );


  if(!articles || !categories) {
    return(
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Date />
          <Header header={"YoNews"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name={Name} action={toggleTheme} />
          <Icon name="notifications-outline" action={notification} />
        </View>
      </View>
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: colors.textSecondary, fontSize: fSize.body }}>
              No articles found for the selected category.
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <>
            <SearchInput value={searchText} onChangeText={setSearchText} placeHolder={'Search news, topics, authors...'} />
            <Chips categories={newCat} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Card item={heroNews} />
            <ListHeader />
          </>
        }
        renderItem={({item}) => (
        <ListView item={item} />)}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: spacing.l,
    },
    headerText: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: spacing.l
    },
  });

export default Index;
