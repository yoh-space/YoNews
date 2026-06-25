import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import SearchInput from "../../components/searchInput";
import { Categories } from "../../data/categories";
import CategoryCard from "../../components/categoryCard";

const Category = () => {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const [searchCategory, setSearchCategory] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Header header={"Category"} />
      <Text style={{ color: colors.textSecondary, fontSize: fSize.body }}>
        Explore stories accross the tech world
      </Text>
      <SearchInput
        value={searchCategory}
        onChangeText={setSearchCategory}
        placeHolder={"Search categories"}
      />
      <FlatList
        data={Categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{}}
        contentContainerStyle={{ padding: spacing.l, gap: spacing.m }}
        columnWrapperStyle={{ justifyContent: "space-between", gap: spacing.m }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => Alert.alert(`You selected ${item.categoryName}`)}
            style={{
              backgroundColor: colors.surfaceBg,
              padding: spacing.xx,
              width: "50%",
              borderColor: colors.surfaceSecondary,
              borderWidth: 1,
              borderRadius: spacing.xx,
            }}
          >
            <CategoryCard
              iconName={item.iconName}
              iconColor={item.iconColor}
              iconBackground={item.iconBackground}
              categoryName={item.categoryName}
              articleCount={item.articleCount}
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: spacing.x,
    },
  });

export default Category;
