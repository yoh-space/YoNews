import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useTheme from '../../store/useTheme';



const Profile = () => {
    const { toggleTheme, fSize, spacing } = useTheme();
    return (
        <View style={styles.container}>
            <Button title="Change Appearance" onPress={toggleTheme} style={{padding: spacing.xl}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Profile;
