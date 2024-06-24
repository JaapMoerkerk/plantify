import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove, child } from "firebase/database";
import firebaseApp from "./firebaseConfig";
import Footer from "./src/components/footer/footer.js";
import ContentContainer from "./src/components/contentContainer/contentContainer.js";
import Container from "./src/components/containerRed/containerRed.js";

const auth = getAuth();

const FeedScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [allPosts, setAllPosts] = useState([]); // Add state to hold all posts
  const [value, setValue] = useState(); //reload for delete

  // Fetch data from Firebase Realtime Database
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const fetchData = async () => {
        console.log("here:" + route.params) 
        if (route.params) {
          const { userId } = route.params;
          

        try {
          const response = await fetch(
            "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/Stekjes.json"
          );
          const data = await response.json();
          if (data) {
            const plantArray = Object.entries(data)
              .filter(
                ([id, plantUser]) => plantUser && plantUser.userId === userId
              )
              .map(([id, plantUser]) => plantUser);
            setPosts(plantArray);
            setAllPosts(plantArray);
          }
        } catch (error) {
          console.error("Error filtering posts:", error);
        }
      } else {
        try {
          const responsePosts = await fetch(
            "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/Stekjes.json"
          );
          const dataPosts = await responsePosts.json();
          if (dataPosts) {
            const postArray = Object.entries(dataPosts).map(([id, post]) => ({
              id,
              ...post,
            }));
            setPosts(postArray);
            setAllPosts(postArray); // Save all posts initially
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      try {
          const responseTags = await fetch(
            "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/Tags.json"
          );
          const dataTags = await responseTags.json();
          if (dataTags) {
            const tagArray = Object.entries(dataTags).map(([id, tag]) => ({
              id,
              ...tag,
            }));
            setTags(tagArray);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    });
    return unsubscribe;
  }, [navigation, value]);

  const deletePlant = (id) => {
    // console.log(id)
    const db = getDatabase(firebaseApp);
    remove(child(ref(db), "Stekjes/" + id));
    setValue(value + 1);
  };

  const showConfirmation = (id) => {
    Alert.alert(
      "Weet je zeker dat je deze plant wilt verwijderen?",
      "Deze actie is permanent",
      [
        { text: "Back" },
        { text: "Ja, verwijder", onPress: () => deletePlant(id) },
      ]
    );
  };

  const filterPostsByTag = async (tagId) => {
    if (selectedTag === tagId) {
      setSelectedTag(null);
      setPosts(allPosts);
      return;
    }
    setSelectedTag(tagId);
    try {
      const responsePlantTags = await fetch(
        "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/StekjesTags.json"
      );
      const dataPlantTags = await responsePlantTags.json();
      if (dataPlantTags) {
        const plantTagArray = Object.entries(dataPlantTags)
          .filter(([id, plantTag]) => plantTag && plantTag.tagId === tagId)
          .map(([id, plantTag]) => plantTag.plantId);

        const filteredPosts = allPosts.filter((post) =>
          plantTagArray.includes(post.id)
        );
        setPosts(filteredPosts);
      }
    } catch (error) {
      console.error("Error filtering posts:", error);
    }
  };

  return (
    <Container>
      <ContentContainer>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Your Personalized Feed</Text>

          <ScrollView horizontal style={styles.tagsContainer}>
            {tags.map((tag) => (
              <TouchableOpacity
                key={tag.id}
                style={[
                  styles.tagButton,
                  selectedTag === tag.id && styles.selectedTagButton,
                ]}
                onPress={() => filterPostsByTag(tag.id)}
              >
                <Text style={styles.tagButtonText}>{tag.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {!route.params ? (
            <TouchableOpacity
              style={[styles.addButton]}
              onPress={() => navigation.navigate("FeedScreen", { userId: auth.currentUser.uid })}
            >
              <Text style={styles.tagButtonText}>Jouw toegevoegde planten</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
          <TouchableOpacity
            style={[styles.addButton]}
            onPress={() =>
              navigation.navigate("AddPlant", { plantToEdit: null })
            }
          >
            <Text style={styles.tagButtonText}>Voeg een plant toe!</Text>
          </TouchableOpacity>
          {posts.map((post) => (
            <View key={post.id} style={styles.post}>
              <Text style={styles.postTitle}>{post.name}</Text>
              <Text style={styles.postContent}>{post.description}</Text>
              {post.img && (
                <Image source={{ uri: post.img }} style={styles.postImage} />
              )}
              {route.params ? (
                <Button
                  title="Bewerk"
                  onPress={() =>
                    navigation.navigate("AddPlant", { plantToEdit: post })
                  }
                />
              ) : (
                <></>
              )}
              {route.params ? (
                <Button
                  title="Verwijder"
                  onPress={() => showConfirmation(post.id)}
                />
              ) : (
                <></>
              )}
              <Button
                title="Lees meer"
                onPress={() => navigation.navigate("FeedDetail", { post })}
                style={styles.readMoreButton}
              />
            </View>
          ))}

      <Button
        title="Load More"
        onPress={() => {}}
        style={styles.loadMoreButton}
        color="#7cd3c3"
      />
    </ScrollView>
        </ContentContainer>
        <Footer navigation={navigation}/>
      </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: '#faf9f7'
  },
  tagsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tagButton: {
    padding: 10,
    backgroundColor: "#f0c6ba",
    borderRadius: 20,
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: "#e07a5f",
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 15,
    width: 200,
  },
  selectedTagButton: {
    backgroundColor: "#e07a5f",
  },
  tagButtonText: {
    color: '#faf9f7',
    fontWeight: "bold",
  },
  post: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#faf9f7",
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
  postImage: {
    width: "100%",
    height: 200,
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
