import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import Icon from '../../components/icon';
import ProfileCard from '../../components/profileCard';
import StatusCard from '../../components/statusCard';
import { preferences } from '../../data/settingOptions';
import OptionList from '../../components/optionList';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';


const Profile = () => {
    const users = useQuery(api.users.getUserByEmail, {email: "johndoe@gmail.com"});

    const { fSize, spacing, colors } = useTheme();
    const styles = createStyles(colors, fSize, spacing);
    const handleSettingsPress = () => {
        Alert.alert('Settings', 'Settings button pressed!');
    }
    const getPreferences = preferences();
    if(!users) {
        return (
            <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Loading...</Text>
                </View>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={[styles.container,{ paddingHorizontal: spacing.x }]} edges={['top', 'left', 'right']}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Header header={'Profile'} />
                <Icon name='settings-outline' color={colors.textPrimary} action={handleSettingsPress} />            
            </View>
            <ProfileCard person={users} />
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: spacing.l}}>
                <StatusCard readCount={120} statusText={'Read'} />
                <StatusCard readCount={36} statusText={'Saved'} />
                <StatusCard readCount={'12d'} statusText={'Streak'} />
            </View>
            <Text style={{color: colors.textSecondary, fontFamily:'Syne_700Bold', fontSize: fSize.caption, marginTop: spacing.l }}>PREFERENCES</Text>
            <OptionList preferences={getPreferences} />
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
