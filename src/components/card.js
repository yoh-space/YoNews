import React from "react";
import { StyleSheet, View, Pressable, ImageBackground } from "react-native";
import useTheme from "../store/useTheme";
import HeroTitle from "./heroTitle";
import { LinearGradient } from "expo-linear-gradient";
import Tag from "./tag";
import Caption from "./caption";

const Card = ({ item }) => {
  const { colors, fSize, spacing } = useTheme();
  if(!item) {
    return (
      <View style={[styles.pressable, { borderRadius: spacing.xx, backgroundColor: colors.surfaceSeondary, justifyContent: 'center', alignItems: 'center' }]}>
        <HeroTitle Title={"No articles found"} noItemFound={true} />
      </View>
    )
  }
  return (
    <Pressable
      onPress={() => alert("Card Pressed")}
      style={[styles.pressable, { borderRadius: spacing.xx }]}
    >
      <ImageBackground 
        source={{ uri: item.imageUrl }} 
        onError={(e) => console.log("Image error:", e)}
        resizeMode="cover"
        style={[styles.imageBackground]}>
        <LinearGradient
          colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.25)", "rgba(0,0,0,0.82)"]}
          style={[styles.gradient, { padding: spacing.l }]}
        >
          <Tag categoryName={"LIVE"} textColor="white" bgColor='red' />
          <View style={styles.contents}>
            <HeroTitle Title={item.title} />
            <Caption author={"John Doe"} readTime={"5 min read"} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: 220,
    width: "100%",
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
  },
  contents: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Card;
