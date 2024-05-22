// FeedDetail.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Detail</Text>
      <Text style={styles.content}>Detail content goes here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
  },
});

export default FeedDetail;
