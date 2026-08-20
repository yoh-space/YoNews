import { StyleSheet, View, Image, Pressable } from "react-native";
import useTheme from "../../store/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { router } from "expo-router";
const CatListView = ({ item }) => {
  const { colors, fSize, spacing } = useTheme();

  const handleEdit = (data) => {};
  const handleDelete = (data) => {};
  const handleCreate = () => {};

  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: spacing.m,
          backgroundColor: colors.surfaceSecondary,
          borderRadius: spacing.x,
        },
      ]}
    >
      <Pressable
        style={{
          flexDirection: "row",
          padding: spacing.m,
          gap: spacing.x,
        }}
        onPress={() => router.push(`/categories/${item.categoryName}`)}
      >
        <Ionicons name={item.iconName || "newspaper"} size={40} />
        <Text
          style={[
            styles.title,
            {
              color: colors.textSecondary || "#000000",
              fontSize: fSize.bodylarge,
            },
          ]}
        >
          {item.categoryName}
        </Text>
      </Pressable>

      <View style={styles.footer}>
        <Pressable
          onPress={() => handleEdit(item)}
          style={{ flexDirection: "row", gap: spacing.m }}
        >
          <Text style={{ color: colors.success }}>Edit</Text>
          <Ionicons name={"pencil"} size={20} color={colors.success} />
        </Pressable>

        <Pressable
          onPress={() => handleDelete(item)}
          style={{ flexDirection: "row", gap: spacing.m }}
        >
          <Text style={{ color: colors.danger }}>Delete</Text>
          <Ionicons name={"trash"} size={20} color={colors.danger} />
        </Pressable>
      </View>
    </View>
  );
};

export default CatListView;

const styles = StyleSheet.create({
  container: {
    width: "48%",
  },

  image: {
    width: 80,
    height: 80,
  },

  title: {
    marginTop: 6,
    fontWeight: "600",
    lineHeight: 24,
  },

  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 30,
  },
});
