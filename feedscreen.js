import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [allPosts, setAllPosts] = useState([]);  // Add state to hold all posts

  // Fetch data from Firebase Realtime Database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePosts = await fetch('https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/Stekjes.json');
        const dataPosts = await responsePosts.json();
        if (dataPosts) {
          const postArray = Object.entries(dataPosts).map(([id, post]) => ({
            id,
            ...post
          }));
          setPosts(postArray);
          setAllPosts(postArray);  // Save all posts initially
        }

        const responseTags = await fetch('https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/Tags.json');
        const dataTags = await responseTags.json();
        if (dataTags) {
          const tagArray = Object.entries(dataTags).map(([id, tag]) => ({
            id,
            ...tag
          }));
          setTags(tagArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterPostsByTag = async (tagId) => {
    if (selectedTag === tagId) {
      setSelectedTag(null);
      setPosts(allPosts);
      return;
    }
    setSelectedTag(tagId);
    try {
      const responsePlantTags = await fetch('https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/StekjesTags.json');
      const dataPlantTags = await responsePlantTags.json();
      if (dataPlantTags) {
        const plantTagArray = Object.entries(dataPlantTags)
          .filter(([id, plantTag]) => plantTag && plantTag.tagId === tagId)
          .map(([id, plantTag]) => plantTag.plantId);

        const filteredPosts = allPosts.filter((post) => plantTagArray.includes(post.id));
        setPosts(filteredPosts);
      }
    } catch (error) {
      console.error('Error filtering posts:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Personalized Feed</Text>

      <ScrollView horizontal style={styles.tagsContainer}>
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[
              styles.tagButton,
              selectedTag === tag.id && styles.selectedTagButton
            ]}
            onPress={() => filterPostsByTag(tag.id)}
          >
            <Text style={styles.tagButtonText}>{tag.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {posts.map((post) => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.postTitle}>{post.name}</Text>
          <Text style={styles.postContent}>{post.description}</Text>
          {post.img && <Image source={{ uri: post.img }} style={styles.postImage} />}
          <Button
            title="Read More"
            onPress={() => navigation.navigate('FeedDetail', { post })}
            style={styles.readMoreButton}
          />
        </View>
      ))}

      <Button title="Load More" onPress={() => {}} style={styles.loadMoreButton} />
    </ScrollView>
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
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tagButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    marginRight: 10,
  },
  selectedTagButton: {
    backgroundColor: '#6200ee',
  },
  tagButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
  postImage: {
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