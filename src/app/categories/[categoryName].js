import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import ListView from '../../components/listView';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import HeroTitle from '../../components/heroTitle';

const CategoryName = () => {
    const { categoryName } = useLocalSearchParams();
    const { colors, fSize, spacing } = useTheme();
    const articles = useQuery(api.articles.getArticlesByCategory, { categoryName });
    if(!articles) {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.background, paddingHorizontal: spacing.x}}>
                <Header header={categoryName} />
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <Text style={{color: colors.textSecondary, fontSize: fSize.body}}>Loading...</Text>
                </View>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.background, paddingHorizontal: spacing.x}}>
            <Header header={categoryName} />
            <FlatList
                data={articles}
                keyExtractor={(item) => item._id}
                renderItem={({item})=> (
                    <ListView item={item} />
                )}
                ListEmptyComponent={() => (
                    <View>
                        <HeroTitle Title={"No articles found"} noItemFound={true} />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default CategoryName;
