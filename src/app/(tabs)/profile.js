import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';


const Profile = () => {
    const { toggleTheme, fSize, spacing, colors } = useTheme();
    const styles = createStyles(colors, fSize, spacing);
    return (
        <SafeAreaView style={styles.container}>
            <Header header={'Profile'} />
            <Button title="Change Appearance" onPress={toggleTheme} style={{padding: spacing.xl}}/>
        </SafeAreaView>
    );
}

const createStyles = (colors, fSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,

        flex: 1
    }
});

export default Profile;
