import React from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import Icon from "./icon";
import useTheme from "../store/useTheme";

const OptionList = ({ preferences }) => {
  const { colors, spacing, fSize } = useTheme();
  return (
    <ScrollView
      style={{
        marginTop: spacing.l,
        backgroundColor: colors.surfaceBg,
        borderTopLeftRadius: spacing.l,
        borderTopRightRadius: spacing.l,
      }}
      showsVerticalScrollIndicator={false}
    >
      {preferences.map((pref, index) => (
        <Pressable
          key={index}
          onPress={pref?.action}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: colors.surfaceBg,
            padding: spacing.m,
            borderBottomWidth: index === preferences.length - 1 ? 0 : 1,
            borderColor: colors.surfaceSecondary,
          }}
        >
          <Icon
            name={pref.iconName}
            color={colors.textPrimary}
            size={20}
          />
          <View
            style={{ alignItems: "flex-start", flex: 1, marginLeft: spacing.m }}
          >
            <Text
              style={{
                fontSize: fSize.body,
                color: colors.textPrimary,
                fontFamily: "Syne_600SemiBold",
              }}
            >
              {pref.label}
            </Text>
            <Text
              style={{ fontSize: fSize.caption, color: colors.textSecondary }}
            >
              {pref?.status}
            </Text>
          </View>
          <Icon
            name="chevron-forward-outline"
            color={colors.textSecondary}
            iconBackground={'transparent'}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};
export default OptionList;
