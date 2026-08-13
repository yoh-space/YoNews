import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import Chips from "../../components/chips";
import ListView from "../../components/listView";
import useBookmarkStore from "../../store/useBookmarkStore";
const Favorite = () => {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const { bookmarks, removeBookmark, addBookmark,loadBookmarks } = useBookmarkStore();
  const articleLength = bookmarks.length;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const cats = [... new Set(bookmarks.map((item) => item.categoryName))];
  const allCategories = [{_id: "all", categoryName: "All"}, ...cats.map((cat) => ({_id: cat, categoryName: cat}))];
  if(bookmarks.length === 0 && selectedCategory !== "All"){
    setSelectedCategory("All")
  }

  const filteredBookmarks = selectedCategory === "All" ? bookmarks : bookmarks.filter((item) => item.categoryName === selectedCategory);


  useEffect(() => {
    loadBookmarks();
  }, [removeBookmark, addBookmark]);
  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: spacing.l }]}>
      <Header header={"Saved"} />
      <Text style={{ fontSize: fSize.caption, color: colors.textSecondary }}>
        {articleLength} articles ready to read
      </Text>
      <Chips categories={allCategories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      {
        filteredBookmarks.length === 0 && (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'
            }}>
                <Text style={{color: colors.textSecondary, fontSize: fSize.body}}>No bookmark found</Text>
            </View>
        )
      }
      <FlatList
        data={filteredBookmarks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingHorizontal: spacing.m }}>
              <ListView
               item={item}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
  });

export default Favorite;
