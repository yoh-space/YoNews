import {useState, useEffect} from "react";
import { StyleSheet, View, Image, Pressable} from "react-native";
import Tag from "./tag";
import Caption from "./caption";
import useTheme from "../store/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import useBookmarkStore from "../store/useBookmarkStore";
import { getItem } from "../utils/storage";

const ListView = ({
  tagLabel,
  title,
  readTime,
  ago,
  imageUrl,
}) => {
  const { colors, fSize, spacing } = useTheme();
  const { addBookmark, removeBookmark } = useBookmarkStore();
  useEffect(() => {
    const checkBookmark = async () => {
      const bookmarks = await getItem("bookmarks");
      if(bookmarks) {
        const parsedBookmarks = JSON.parse(bookmarks);
        const isBookmarked = parsedBookmarks.some(
          (article) => article.title === title
        );
        setBookmarked(isBookmarked);
      }
      else {
        setBookmarked(false);
      }
    };

    checkBookmark();
  }, [title]);
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(title);
      console.log(`Removed bookmark for: ${title}`);
      setBookmarked(false);
    } else {
      addBookmark({ title, imageUrl, tagLabel, readTime, ago });
      console.log(`Added bookmark for: ${title}`);
      setBookmarked(true);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: spacing.m,
          borderBottomColor: colors.border || "#E5E5E5",
        },
      ]}
    >
    <Pressable onPress={() => console.log(`Pressed on article: ${title}`)}>
      <Image
        source={{ uri: imageUrl }}
        style={[
          styles.image,
          {
            borderRadius: spacing.m,
          },
        ]}
      />      
    </Pressable>


      <View style={styles.content}>
        <Tag tagLabel={tagLabel} />

        <Text
          numberOfLines={2}
          style={[
            styles.title,
            {
              color: colors.textSecondary || "#000000",
              fontSize: fSize.body,
            },
          ]}
        >
          {title}
        </Text>

        <View style={styles.footer}>
          <Caption ago={ago} color={colors.textSecondary || "#A9A9A9"} readTime={readTime} />

          <Ionicons
            onPress={handleBookmark}
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={20}
            color={bookmarked ? colors.accentPrimary || "#007AFF" : colors.textSecondary || "#A9A9A9"}
          />
        </View>
      </View>
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  image: {
    width: 110,
    height: 110,
  },

  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },

  title: {
    marginTop: 6,
    fontWeight: "600",
    lineHeight: 24,
  },

  footer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});