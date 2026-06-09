import {useState} from "react";
import { StyleSheet, ScrollView, Text, Pressable } from "react-native";
import useTheme from "../store/useTheme";
import { Categories } from "../data/catetories";

const Chips = () => {
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
  const { colors, fSize, spacing } = useTheme();

  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{margin: spacing.l, flexGrow: 0}}>
      {Categories.map((cat) => (
        <Pressable 
          key={cat}
          onPress={()=> setSelectedCategory(cat)}
          style={{
            backgroundColor: selectedCategory === cat ? colors.accentPrimary : colors.surfaceSeondary,
            marginRight: spacing.m,
            paddingVertical: spacing.m,
            paddingHorizontal: spacing.m,
            borderRadius: spacing.s,
          }}>
          <Text style={{color: selectedCategory === cat ? 'white': colors.textSecondary}}>{cat}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Chips;
