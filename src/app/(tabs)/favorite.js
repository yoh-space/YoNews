import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import Chips from "../../components/chips";
import ListView from "../../components/listView";
import { getItem } from "../../utils/storage";
import useBookmarkStore from "../../store/useBookmarkStore";
const Favorite = () => {
  const articleLength = 2;
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const { bookmarks, setBookmarks, removeBookmark, addBookmark } = useBookmarkStore();
  useEffect(() => {
    const loadBookmarks = async () => {
      const storedBookmarks = await getItem("bookmarks");
      const parsedBookmarks = storedBookmarks
        ? JSON.parse(storedBookmarks)
        : [];
      setBookmarks(parsedBookmarks);
      console.log(`parsedBookmarks: ${JSON.stringify(bookmarks)}`);
    };
    loadBookmarks();
  }, [removeBookmark, addBookmark]);
  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: spacing.l }]}>
      <Header header={"Saved"} />
      <Text style={{ fontSize: fSize.caption, color: colors.textSecondary }}>
        {articleLength} articles ready to read
      </Text>
      <Chips />
      {
        bookmarks.length === 0 && (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'
            }}>
                <Text style={{color: colors.textSecondary, fontSize: fSize.body}}>No bookmark found</Text>
            </View>
        )
      }
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.title}
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
