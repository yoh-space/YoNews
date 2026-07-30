import { StyleSheet, ScrollView, Text, Pressable } from "react-native";
import useTheme from "../store/useTheme";
const Chips = ({categories, selectedCategory, setSelectedCategory}) => {
  const { colors, fSize, spacing } = useTheme();

  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginTop: spacing.m,marginBottom: spacing.m, flexGrow: 0}}>
      {categories.map((cat) => (
        <Pressable 
          key={cat._id}
          onPress={()=> setSelectedCategory(cat.categoryName)}
          style={{
            backgroundColor: selectedCategory === cat.categoryName ? colors.accentPrimary : colors.surfaceSeondary,
            marginRight: spacing.m,
            paddingVertical: spacing.m,
            paddingHorizontal: spacing.m,
            borderRadius: spacing.l,
          }}>
          <Text style={{color: selectedCategory === cat.categoryName ? 'white': colors.textSecondary}}>{cat.categoryName}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Chips;
