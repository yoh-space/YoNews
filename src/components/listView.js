import {useState, useEffect} from "react";
import { StyleSheet, View, Image, Pressable} from "react-native";
import Tag from "./tag";
import Caption from "./caption";
import useTheme from "../store/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import useBookmarkStore from "../store/useBookmarkStore";
import { router } from "expo-router";
import { ago } from "../utils/ago";
const ListView = ({item}) => {
  const { colors, fSize, spacing } = useTheme();
  const { addBookmark, removeBookmark,isBookmarked } = useBookmarkStore();


  const handleBookmark = () => {
    if (isBookmarked(item._id)) {
      removeBookmark(item._id);
    } else {
      addBookmark(item);
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
    <Pressable onPress={() => router.push(`/article/${item._id}`)}>
      <Image
        source={{ uri: item.imageUrl }}
        style={[
          styles.image,
          {
            borderRadius: spacing.m,
          },
        ]}
      />      
    </Pressable>


      <View style={styles.content}>
        <Tag categoryName={item.categoryName} />

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
          {item.title}
        </Text>

        <View style={styles.footer}>
          <Caption ago={ago(item._creationTime)} color={colors.textSecondary || "#A9A9A9"} readTime={item.readTime} />

          <Ionicons
            onPress={handleBookmark}
            name={isBookmarked(item._id) ? "bookmark" : "bookmark-outline"}
            size={20}
            color={isBookmarked(item._id) ? colors.accentPrimary || "#007AFF" : colors.textSecondary || "#A9A9A9"}
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