import {useState} from "react";
import { StyleSheet, Pressable, Text, ScrollView } from "react-native";
import useTheme from "../store/useTheme";
import { categories } from "../data/categories";

const Chips = () => {
  const { colors, fSize, spacing } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('Trending');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.chipsContainer,{marginTop: spacing.m}]}
      contentContainerStyle={{
        paddingHorizontal: spacing.m,
        gap: spacing.s,
      }}
    >
      {categories.map((cat) => (
        <Pressable
          onPress={() => setSelectedCategory(cat)}
          key={cat}
          style={[
            styles.chip,
            {
              backgroundColor: selectedCategory === cat ? colors.accentPrimary : colors.surfaceSecondary,
              paddingHorizontal: spacing.m,
              paddingVertical: spacing.s,
              borderRadius: spacing.m,
            },
          ]}
        >
          <Text
            style={{
              color: selectedCategory === cat ? 'white' : colors.textSecondary,
              fontSize: fSize.tag,
            }}
          >
            {cat}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chip: {
    height: 30,
    justifyContent: 'center',
  },
});

export default Chips;