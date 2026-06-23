import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import useTheme from "../store/useTheme";
import { Ionicons } from "@expo/vector-icons";
const CategoryCards = ({
  title,
  iconName,
  iconColor,
  articleCount,
  action,
  iconSize,
}) => {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  return (
    <Pressable style={styles.container} onPress={action}>
      <View style={{marginBottom: spacing.m,paddingVertical: spacing.l, paddingHorizontal: spacing.l, borderRadius: spacing.l, backgroundColor: colors.overlayLight}}>
        <Ionicons
          name={iconName}
          color={iconColor}
          action={action}
          size={iconSize}
        />
      </View>
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: fSize.body,
          fontFamily: "Syne_700Bold",
        }}
      >
        {" "}
        {title}{" "}
      </Text>
      <Text style={{ color: colors.textSecondary, fontSize: fSize.caption }}>
        {articleCount} articles
      </Text>
    </Pressable>
  );
};

const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      height: 150,
      backgroundColor: colors.surfaceSecondary,
      padding: spacing.l,
      borderRadius: spacing.m,
      alignItems: "flex-start",
      justifyContent: "center",
      margin: spacing.s,
    },
  });

export default CategoryCards;
