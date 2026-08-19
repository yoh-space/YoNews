import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import useTheme from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../convex/_generated/api";
import { useQuery, useMutaion } from "convex/react";
import CatListView from "./catListView";
import {Ionicons} from '@expo/vector-icons'
const CategorySection = () => {
  const categories = useQuery(api.categories.getAllCategories);
  const { colors, fSize, spacing } = useTheme();

  if (!categories) {
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.surfaceBg,
      }}
      edges={["top", "left", "right"]}
    >
      <Text>Loading</Text>
    </SafeAreaView>;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.surfaceBg,
      }}
      edges={["top", "left", "right"]}
    >
      <FlatList
        style={{ flex: 1 }}
        data={categories}
        keyExtractor={(item) => item._id}
        columnWrapperStyle={{ gap: spacing.x }}
        contentContainerStyle={{ gap: spacing.x }}
        numColumns={2}
        renderItem={({ item }) => <CatListView item={item} />}
      />
      <Pressable
        style={[styles.fab, { backgroundColor: colors.accentPrimary }]}
      >
        <Ionicons name="add" size={40} color={"white"} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategorySection;
