import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import useTheme from "../../store/useTheme";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { LinearGradient } from "expo-linear-gradient";
const ArticleDetail = () => {
  const { colors, fSize, spacing } = useTheme();
  const { id } = useLocalSearchParams();
  const article = useQuery(api.articles.getArticleById, { id });

  return (
    <SafeAreaView style={[styles.container]} edges={["bottom", "left", "right"]}>
      <ImageBackground
        source={{ uri: article?.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.25)", "rgba(0,0,0,0.82)"]}
          style={[styles.gradient, { padding: spacing.l }]}
        >
          <Text>Article Title: {article?.title}</Text>
        </LinearGradient>
      </ImageBackground>
      <Text>Article Content: {article?.content}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    justifyContent: "flex-end",
  },
});

export default ArticleDetail;
