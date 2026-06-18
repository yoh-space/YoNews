import React from "react";
import { StyleSheet, View, Text } from "react-native";
import useTheme from "../store/useTheme";
const Tag = ({ tagLabel, color }) => {
  const { colors, spacing, fSize } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        backgroundColor: color ? color: 'transparent',
        paddingHorizontal: spacing.m,
        paddingVertical: spacing.s,
        borderRadius: spacing.m,
      }}
    >
      {color && (
        <View
          style={[
            styles.dot,
            { backgroundColor: "white", marginRight: spacing.s },
          ]}
        />
      )}
      <Text style={{ color: colors.accentPrimary, fontSize: fSize.tag }}>{tagLabel}</Text>
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
