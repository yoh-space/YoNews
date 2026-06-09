import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { day, month, dateNo } from '../utils/today';
import useTheme from '../store/useTheme';

const Date = () => {
    const {colors, fSize,spacing} = useTheme();
    const styles = createStyles(colors, fSize,spacing);
    return (
        <Text style={styles.dateText}>
            {day}, {month} {dateNo}
        </Text>
    );
}

const createStyles = (colors, fSize, spacing) => StyleSheet.create({
    dateText: {
        color: colors.textSecondary,
        fontSize: fSize.tag,
    }
});

export default Date;
