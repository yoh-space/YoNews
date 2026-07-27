import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useTheme from '../../store/useTheme';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

const  ArticleDetail = () => {
  const { id } = useLocalSearchParams();
  const article = useQuery(api.articles.getArticleById, { id });
  console.log("ArticleDetail component received article:", article);

  return (
    <SafeAreaView style={[styles.container, ]}>
      <Text>Article ID: {id}</Text>
      <Text>Article Title: {article?.title}</Text>
      <Text>Article Content: {article?.content}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default ArticleDetail;
