import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  // Fetch data from Firebase Realtime Database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/Stekjes.json');
        const data = await response.json();
        if (data) {
          const postArray = Object.entries(data).map(([id, post]) => ({
            id,
            ...post
          }));
          setPosts(postArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>Your Personalized Feed</Text>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postTitle}>{post.name}</Text>
            <Image source={{ uri: post.img }} style={styles.image} />
            <Text style={styles.postContent}>{post.description}</Text>
            <Button
              title="Read More"
              onPress={() => navigation.navigate('FeedDetail', { post })}
              style={styles.readMoreButton}
            />
          </View>
        ))}
        <Button title="Load More" onPress={() => {}} style={styles.loadMoreButton} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
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
  image: {
    width: '100%',
    height: 200,
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
