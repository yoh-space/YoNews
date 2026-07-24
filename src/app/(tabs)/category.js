import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import SearchInput from "../../components/searchInput";
import { Categories } from "../../data/categories";
import CategoryCard from "../../components/categoryCard";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";

const Category = () => {
  const categories = useQuery(api.categories.getAllCategories);
  const cat = categories?.slice(1)
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const [searchCategory, setSearchCategory] = useState("");
  if(!categories) {
    return(
      <SafeAreaView style={styles.container} edges={['top','left','right']}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    )
  }
  
  return (
    <SafeAreaView style={styles.container} edges={['top','left','right']}>
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
        data={cat}
        keyExtractor={(item) => item._id}
        numColumns={2}
        style={{}}
        showsVerticalScrollIndicator={false}
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
