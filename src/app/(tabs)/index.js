import { useState } from "react";
import { StyleSheet, View, Alert, FlatList } from "react-native";
import Date from "../../components/date";
import useTheme from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import Icon from "../../components/icon";
import Chips from "../../components/chips";
import SearchInput from "../../components/searchInput";
import Card from "../../components/card";
const Index = () => {
  const [searchText, setSearchText] = useState("");
  const { colors, fSize, spacing, toggleTheme, themeMode } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const Name = themeMode === "light" ? "moon-outline" : "sunny-outline";
  const notification = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };
  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
  ];
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Date />
          <Header header={"YoNews"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name={Name} action={toggleTheme} />
          <Icon name="notifications-outline" action={notification} />
        </View>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
          <SearchInput value={searchText} onChangeText={setSearchText} />
          <Chips />
          </>
        }
        renderItem={({item }) => <Card Title={item.title}/>}
        showsVerticalScrollIndicator={false}
      />
      

    </SafeAreaView>
  );
};

const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: spacing.l,
    },
  });

export default Index;
