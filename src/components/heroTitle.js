import React from "react";
import { StyleSheet, View, Text } from "react-native";
import useTheme from "../store/useTheme";
const HeroTitle = ({ Title, noItemFound }) => {
  const { colors, spacing, fSize } = useTheme();
  return (
    <Text
      style={{
        color: noItemFound ? colors.textPrimary : 'white',
        fontSize: fSize.carouselTitle,
        fontFamily: "Syne_700Bold",
      }}
    >
      {Title}
    </Text>
  );
};

const styles = StyleSheet.create({});

export default HeroTitle;
