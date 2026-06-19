import {useState, useEffect} from "react";
import { StyleSheet, View, Image, Pressable, Text,Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../store/useTheme";
import Tag from "./tag";
import Caption from "./caption";
import useBookmarkStore from "../store/useBookmarkStore";
import {getItem, setItem} from "../utils/storage";

const ListView = ({ imageUrl, tagLable, title, postedTime, readTime }) => {
  const { colors, fSize, spacing } = useTheme();
  const { addBookmark, removeBookmark } = useBookmarkStore();
  const [isBookmarked, setIsBookmarked] = useState(false);
useEffect(() => {
    const checkBookmark = async () => {
      const bookmarks = await getItem("bookmarks");
      if(bookmarks) {
        const parsedBookmarks = JSON.parse(bookmarks);
        const isBookmarked = parsedBookmarks.some(
          (article) => article.title === title
        );
        console.log("Parsed Bookmarks:", title, parsedBookmarks);

        setIsBookmarked(isBookmarked);
      }
      else {
        setIsBookmarked(false);
      }
    };

    checkBookmark();
  }, [title]);
  const handleBookmarkPress = () => {
    if (isBookmarked) {
        removeBookmark(title);
        console.log("Bookmark removed:", title);
    } else {
        addBookmark(title);
        console.log("Bookmark added:", title);
    }
    setIsBookmarked(!isBookmarked);
  }
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: spacing.m,
      }}
    >
      <Pressable
        onPress={() => {
          Alert.alert("News Article", "You clicked on the news article");
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={[styles.imageCard, { borderRadius: spacing.m }]}
        />
      </Pressable>
      <View style={styles.content}>
        <Tag tagLabel={tagLable} color={colors.overlayLight} />
        <Text
          numberOfLines={2}
          style={[
            styles.titleText,
            {
              color: colors.textPrimary,
              fontSize: fSize.bodylarge,
            },
          ]}
        >
          {title}
        </Text>
        <View style={styles.footer}>
          <Caption postedTime={postedTime} readTime={readTime} />
          <Ionicons name={ isBookmarked? "bookmark" : "bookmark-outline"} size={20} color={colors.accentPrimary} onPress={handleBookmarkPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCard: {
    width: 110,
    height: 110,
  },
  titleText: {
    marginTop: 10,
    fontFamily: "Syne_500Medium",
  },
  content: {
    flex: 1,
    marginLeft: 8,
    justifyContent: "space-between",
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});

export default ListView;
