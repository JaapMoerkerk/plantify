// FeedScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FeedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Personalized Feed</Text>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Post Title</Text>
        <Text style={styles.postContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, nunc nec viverra mollis, lectus neque feugiat est, sit amet lacinia dolor ligula ac libero.</Text>
        <Button title="Read More" onPress={() => navigation.navigate('FeedDetail')} style={styles.readMoreButton} />
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Another Post Title</Text>
        <Text style={styles.postContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, nunc nec viverra mollis, lectus neque feugiat est, sit amet lacinia dolor ligula ac libero.</Text>
        <Button title="Read More" onPress={() => navigation.navigate('FeedDetail')} style={styles.readMoreButton} />
      </View>
      <Button title="Load More" onPress={() => {}} style={styles.loadMoreButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  post: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  readMoreButton: {
    marginTop: 10,
  },
  loadMoreButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default FeedScreen;
