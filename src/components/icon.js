import {View, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import useTheme from '../store/useTheme';


export default function Icon({name, action, iconBackground}) {
    const { colors, fSize, spacing } = useTheme();
    const styles = createStyles(iconBackground, colors, fSize, spacing);
    return (
        <View style={styles.container}>
            <Ionicons name={name} size={16} color={colors.textSecondary} onPress={action} />
        </View>
    );
}

const createStyles = (iconBackground, colors, fSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor: iconBackground  || colors.surfaceSecondary,
        height: 30,
        width: 30,
        borderRadius: 10,
        margin: spacing.s,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    }
})