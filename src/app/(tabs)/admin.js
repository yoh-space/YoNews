import { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import ArticleSection from "../../components/admin/articleSection";
import CategorySection from "../../components/admin/categorySection";

const sections = [
  {
    key: "article",
    label: "Articles",
  },
  {
    key: "category",
    label: "Categories",
  },
];
const Admin = () => {
  const [section, setSection] = useState("article");

  const { colors, fSize, spacing } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.surfaceBg,
        paddingHorizontal: spacing.x,
      }}
      edges={["top", "left", "right"]}
    >
      <Header header={"Admin"} />
      <View
        style={[
          styles.segment,
          { backgroundColor: colors.surfaceSecondary, borderRadius: spacing.x },
        ]}
      >
        {sections.map((sec) => (
          <Pressable
            key={sec.key}
            onPress={() => setSection(sec.key)}
            style={[
              styles.sectionSegment,
              {
                backgroundColor:
                  section === sec.key
                    ? colors.accentPrimary
                    : colors.surfaceSecondary,
                borderRadius: spacing.l,
              },
            ]}
          >
            <Text
              style={{
                color: section === sec.key ? "white" : colors.textPrimary,
                fontSize: fSize.bodylarge,
              }}
            >
              {sec.label} 
            </Text>
          </Pressable>
        ))}
      </View>

     {section === "article" ? <ArticleSection /> : <CategorySection />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  segment: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  sectionSegment: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

export default Admin;
