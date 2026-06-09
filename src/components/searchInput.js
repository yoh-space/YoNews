import React from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import Icon from "./icon";
import useTheme from "../store/useTheme";

const SearchInput = ({ value, onChangeText}) => {
  const { colors, fSize, spacing } = useTheme();
  const searchingTopic = (value) => {
    Alert.alert("Search", `You searched for: ${value}`);
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surfaceSecondary,
          padding: spacing.s,
          borderRadius: spacing.m,
          marginTop: spacing.x,  
        },
      ]}
    >
      <Icon name="search-outline" action={() => searchingTopic(value)} />
      <TextInput
        style={[
          styles.input,
          { color: colors.textPrimary, fontSize: fSize.body },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search news, topics, authors..."
        placeholderTextColor={colors.textSecondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
  },
});

export default SearchInput;
