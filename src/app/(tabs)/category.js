import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import Description from "../../components/descriptions";
import SearchInput from "../../components/searchInput";
import { Categories } from "../../data/catetories";
import CategoryCards from "../../components/categoryCards";
const Category = () => {
  const { colors, fSize, spacing } = useTheme();
  const [searchText, setSearchText] = useState("");
  const styles = createStyles(colors, fSize, spacing);
  return (
    <SafeAreaView
      style={[styles.container, { paddingHorizontal: spacing.xx }]}
      edges={["top", "left", "right"]}
    >
      <Header header={"Category"} />
      <Description
        description={"This is a sample description for the category."}
      />
      <SearchInput value={searchText} onChangeText={setSearchText} />
      <FlatList
        data={Categories}
        renderItem={({ item }) => (
        <View style={{width: '50%'}}>
          <CategoryCards
            title={item.title}
            iconName={item.iconName}
            iconColor={item.iconColor}
            articleCount={item.articlesCount}
            action={() => console.log(`${item.title} category pressed`)}
            iconSize={30}
          />
        </View>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        style={{flex:1}}
        contentContainerStyle={{ padding: spacing.l }}
        contentWrapperStyle={{justifyContent: 'space-between'}}
      />
    </SafeAreaView>
  );
};

const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
  });

export default Category;
