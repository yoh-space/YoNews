import { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Date from "../../components/date";
import useTheme from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import Icon from "../../components/icon";
import SearchInput from "../../components/searchInput";
import Chips from "../../components/chips";

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const { colors, fSize, spacing, toggleTheme } = useTheme();
  const styles = createStyles(colors, fSize, spacing);

  const notification = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Date />
          <Header header={"YoNews"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="moon-outline" action={toggleTheme} />
          <Icon name="notifications-outline" action={notification} />
        </View>
      </View>
      {/* Search Input */}
      <SearchInput value={searchText} onChangeText={setSearchText} />

      {/* Chips */}
      <Chips />
    </SafeAreaView>
  );
};

const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      padding: spacing.l,
    },
  });

export default Index;
