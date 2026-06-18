import { useState } from "react";
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
const Index = () => {
  const [searchText, setSearchText] = useState("");
  const { colors, fSize, spacing, toggleTheme, themeMode } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const Name = themeMode === "light" ? "moon-outline" : "sunny-outline";
  const notification = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };
  const heroNews = DATA[0];
  const ListHeader = () => (
    <View style={styles.headerText}>
      <Text style={{ fontSize: fSize.newsListTitle , fontFamily: 'Syne_700Bold'}}>Latest Stories</Text>
      <Pressable onPress={() => {
        // Handle "See all" press action here
        console.log("See all pressed");
      }}>
      <Text style={{ fontSize: fSize.tagLabel , fontFamily: 'Syne_400Bold', color: colors.accentPrimary}}>See all</Text>
      </Pressable>
    </View>
  );
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
        data={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <SearchInput value={searchText} onChangeText={setSearchText} />
            <Chips />
            <Card Title={heroNews.title} Image={heroNews.image} />
            <ListHeader />
          </>
        }
        renderItem={({item}) => (<ListView imageUrl={item.image} title={item.title} tagLabel={item.tagLabel} ago={item.ago} readTime={item.readTime} />)}
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
