import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import useTheme from '../store/useTheme';
const Caption = ({author, readTime, postedTime}) => {
    const  { colors, spacing, fSize } = useTheme();
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', gap: spacing.m}}>
            {!postedTime && <Text style={{color: colors.textSecondary, fontSize: fSize.caption}}>{author}</Text>}
            {postedTime && <Text style={{color: colors.textSecondary, fontSize: fSize.caption}}>{postedTime}</Text>}
            <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: colors.textSecondary}} />
            {!postedTime && <Ionicons name="time-outline" size={fSize.caption} color={colors.textSecondary} />}
            <Text style={{color: colors.textSecondary, fontSize: fSize.caption}}>{readTime}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Caption;
