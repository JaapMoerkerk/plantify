import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, orderByChild, isEqual, equalTo } from "firebase/database";
import {
  getInstance,
  ref,
  set,
  get,
  push,
  child,
  query,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAILOfAvkTwyP1WRP_9WKPZN0MjmRRdw_8",
  authDomain: "plantify-50b4e.firebaseapp.com",
  databaseURL:
    "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plantify-50b4e",
  storageBucket: "plantify-50b4e.appspot.com",
  messagingSenderId: "757675160517",
  appId: "1:757675160517:web:7086074b1a17ab545811ac",
  databaseURL:
    "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const FeedScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  // Fetch data from Firebase Realtime Database
  useEffect(() => {
    const fetchData = async () => {
      if (route.params) {
        const { userId } = route.params;

        try {
          // console.log(get(query(ref(db, "/Stekjes"), orderByChild("userId"), equalTo(1))))
          console.log(await get(query(ref(db, "/Stekjes"), orderByChild("userId"), equalTo(1))))
          
          // ref(db, "/Stekjes").isEqual(1).on("userId", function (snapshot) {
          //   console.log(snapshot.key);
          // });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        try {
          const response = await fetch(
            "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/Stekjes.json"
          );
          const data = await response.json();
          if (data) {
            const postArray = Object.entries(data).map(([id, post]) => ({
              id,
              ...post,
            }));
            setPosts(postArray);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Personalized Feed</Text>
      {posts.map((post) => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.postTitle}>{post.name}</Text>
          <Text style={styles.postContent}>{post.description}</Text>
          <Button
            title="Read More"
            onPress={() => navigation.navigate("FeedDetail", { post })}
            style={styles.readMoreButton}
          />
        </View>
      ))}
      <Button
        title="Load More"
        onPress={() => {}}
        style={styles.loadMoreButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  post: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
    alignSelf: "center",
  },
});

export default FeedScreen;
