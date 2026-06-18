import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import useTheme from '../store/useTheme';
const Caption = ({author, readTime, ago, color}) => {
    const  { colors, spacing, fSize } = useTheme();
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', gap: spacing.sm}}>
            {!ago && <Text style={{color: color || colors.overlayLight, fontSize: fSize.caption}}>{author}</Text>}
            {ago && <Text style={{color: color || colors.overlayLight, fontSize: fSize.caption}}>{ago}</Text>}
            <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: color || colors.overlayLight}} />
            <Ionicons name="time-outline" size={fSize.caption} color={color || colors.overlayLight} onPress={() => {}} />
            <Text style={{color: color || colors.overlayLight, fontSize: fSize.caption}}>{readTime}</Text>
            
        </View>
    );
}

export default Caption;
