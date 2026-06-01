import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Index;
