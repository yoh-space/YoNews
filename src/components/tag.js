import React from "react";
import { StyleSheet, View, Text } from "react-native";
import useTheme from "../store/useTheme";
const Tag = ({ categoryName, color, textColor, bgColor }) => {
  const { colors, spacing, fSize } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        backgroundColor: bgColor || 'transparent',
        paddingHorizontal: spacing.m,
        paddingVertical: spacing.s,
        borderRadius: spacing.m,
      }}
    >
      {textColor && (
        <View
          style={[
            styles.dot,
            { backgroundColor: "white", marginRight: spacing.s },
          ]}
        />
      )}
      <Text style={{ color: textColor || colors.accentPrimary, fontSize: fSize.tag }}>{categoryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "transparent",
  },
});

export default Tag;
