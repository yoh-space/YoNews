import React from 'react';
import { StyleSheet, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';


const Category = () => {
    const { colors, fSize, spacing } = useTheme();
    const styles = createStyles(colors, fSize, spacing);
    return (
        <SafeAreaView style={styles.container}>
            <Header header={'Category'} />
            
        </SafeAreaView>
    );
}

const createStyles = (colors, fSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    }
});

export default Category;
