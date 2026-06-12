import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import useTheme from '../store/useTheme';
const HeroTitle = ({ Title }) => {
    const { colors, spacing, fSize } = useTheme();
    return (
            <Text style={{ color: 'white', fontSize: fSize.carouselTitle, fontFamily: 'Syne_700Bold' }}>{Title}</Text>
    );
}

const styles = StyleSheet.create({

})

export default HeroTitle;
