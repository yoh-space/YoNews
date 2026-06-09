import { useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
} from "react-native";

import { Categories } from "../data/categories";
import useTheme from "../store/useTheme";

const Chips = () => {
  const { colors, spacing } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState(
    Categories[0]
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[
        styles.container,
        {
          marginVertical: spacing.x,
        },
      ]}
      contentContainerStyle={{
        alignItems: "center",
        paddingHorizontal: spacing.m,
      }}
    >
      {Categories.map((category, index) => (
        <Pressable
          key={index}
          onPress={() => setSelectedCategory(category)}
          style={[
            styles.chip,
            {
              backgroundColor:
                selectedCategory === category
                  ? colors.accentPrimary
                  : colors.surfaceSecondary,

              paddingHorizontal: spacing.m,
              paddingVertical: spacing.m,
              marginRight: spacing.m,
            },
          ]}
        >
          <Text
            style={{
              color:
                selectedCategory === category
                  ? "#FFFFFF"
                  : colors.textSecondary,
            }}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },

  chip: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chips;