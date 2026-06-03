import React from "react";
import { StyleSheet, View } from "react-native";
import Date from "../../components/date";
import useTheme from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import Icon from "../../components/icon";

const Index = () => {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
        <Date />
        <Header header={"YoNews"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="moon-outline" />
          <Icon name="notifications-outline" />
        </View>
      </View>
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

export default Index;
