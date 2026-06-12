import React from "react";
import { StyleSheet, View, Text } from "react-native";
import useTheme from "../store/useTheme";
const Tag = ({ tagLabel }) => {
  const { colors, spacing, fSize } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: 'flex-start',
        alignItems: "center",
        backgroundColor: colors.liveBadge,
        paddingHorizontal: spacing.m,
        paddingVertical: spacing.s,
        borderRadius: spacing.m,
      }}
    >
      <View
        style={[
          styles.dot,
          { backgroundColor: "white", marginRight: spacing.s },
        ]}
      />
      <Text style={{ color: "white", fontSize: fSize.tag }}>{tagLabel}</Text>
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
