import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useTheme from '../store/useTheme';

const Description = ({description}) => {
    const {colors, fSize,spacing} = useTheme();
    const styles = createStyles(colors, fSize,spacing);
    return (
        <Text style={styles.dateText}>
            {description}
        </Text>
    );
}

const createStyles = (colors, fSize, spacing) => StyleSheet.create({
    dateText: {
        color: colors.textSecondary,
        fontSize: fSize.tag,
    }
});

export default Description;
