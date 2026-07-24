import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import useTheme from "../store/useTheme";
const ProfileCard = ({ person }) => {
  const { colors, fSize, spacing } = useTheme();
  return (
    <View
      style={{
        marginTop: spacing.l,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.surfaceBg,
        padding: spacing.l,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.surfaceSecondary,
      }}
    >
      <Image
        source={{ uri: person.imageUrl }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 20,
          marginRight: spacing.m,
        }}
      />
      <View style={{marginLeft: spacing.m }}>
        <Text
          style={{
            fontSize: fSize.bodylarge,
            fontFamily: "Syne_700Bold",
            color: colors.textPrimary,
          }}
        >
          {person.name}
        </Text>
        <Text
          style={{
            fontSize: fSize.caption,
            fontFamily: "Syne_400Regular",
            color: colors.textSecondary,
            marginTop: spacing.s,
          }}
        >
          {person.email}
        </Text>
        <View style={{ alignSelf: 'flex-start', padding: spacing.sm, backgroundColor: colors.surfaceSecondary, borderRadius: spacing.m, marginTop: spacing.s, alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: fSize.caption,
              fontFamily: "Syne_700Bold",
              color: colors.accentPrimary,
            }}
          >
            {person.role}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileCard;
