import React from "react";
import { StyleSheet, View, Pressable, ImageBackground } from "react-native";
import useTheme from "../store/useTheme";
import HeroTitle from "./heroTitle";
import { LinearGradient } from "expo-linear-gradient";
import Tag from "./tag";
import Caption from "./caption";

const Card = ({ Title }) => {
  const source = {
    uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  };
  const { colors, fSize, spacing } = useTheme();
  return (
    <Pressable
      onPress={() => alert("Card Pressed")}
      style={[styles.pressable, { borderRadius: spacing.xx }]}
    >
      <ImageBackground source={source} style={[styles.imageBackground]}>
        <LinearGradient
          colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.25)", "rgba(0,0,0,0.82)"]}
          style={[styles.gradient, { padding: spacing.l }]}
        >
          <Tag tagLabel={"LIVE"} />
          <View style={styles.contents}>
            <HeroTitle Title={Title} />
            <Caption author={"John Doe"} readTime={"5 min read"} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: 200,
    widht: "100%",
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  contents:{
    flex: 1,
    justifyContent: 'flex-end',
  }
});

export default Card;
