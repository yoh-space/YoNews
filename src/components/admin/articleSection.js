import React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import useTheme from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../convex/_generated/api";
import { useQuery, useMutaion } from "convex/react";
import ListView from "./listView";
import { Ionicons } from "@expo/vector-icons";

const ArticleSection = () => {
  const articles = useQuery(api.articles.getAllArticles);
  const { colors, fSize, spacing } = useTheme();

  if (!articles) {
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.surfaceBg,
        paddingHorizontal: spacing.x,
      }}
      edges={["top", "left", "right"]}
    >
      <Text>Loading</Text>
    </SafeAreaView>;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.surfaceBg,
        paddingHorizontal: spacing.x,
      }}
      edges={["top", "left", "right"]}
    >
      <FlatList
        data={articles}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ListView item={item} />}
      />
      <Pressable style={[styles.fab,{backgroundColor: colors.accentPrimary}]}>
        <Ionicons name="add" size={40} color={'white'}/>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ArticleSection;
