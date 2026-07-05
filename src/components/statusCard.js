import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import useTheme from '../store/useTheme';
const StatusCard = ({ readCount, statusText }) => {
    const { colors, fSize, spacing } = useTheme();
    return (
        <View style={{ backgroundColor: colors.surfaceBg, padding: spacing.xx, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flex: 1, marginHorizontal: spacing.s }}>
            <Text style={{ fontSize: fSize.m, color: colors.textPrimary, fontFamily:'Syne_800ExtraBold', fontSize: fSize.newsListTitle }}>{readCount}</Text>
            <Text style={{ fontSize: fSize.s, color: colors.textSecondary }}>{statusText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default StatusCard;
