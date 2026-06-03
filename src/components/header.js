import React from 'react';
import useTheme from '../store/useTheme';
import { StyleSheet, Text } from 'react-native';

const Header = ({ header }) => {
    const {colors,fSize,spacing} = useTheme();
    const styles = createStyles(colors,fSize,spacing);
    return (
        <Text style={styles.headerText}>
            {header}
        </Text>
    );
}

const createStyles = (colors,fSize, spacing) => StyleSheet.create({
    headerText:{
        fontFamily: 'Syne_800ExtraBold',
        fontSize: fSize.header,
        marginLeft: spacing.x,
        color: colors.textPrimary
    }
})

export default Header;
