import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from "./src/components/footer/footer.js";
import Navbar from "./src/components/navbar/navbar.js";
import ContentContainer from "./src/components/contentContainer/contentContainer.js";
import Container from './src/components/containerWhite/containerWhite.js';

import {
  getDatabase,
  getInstance,
  ref,
  set,
  get,
  push,
  child,
  update,
} from "firebase/database";

const db = getDatabase(firebaseApp);
const auth = getAuth();

const Dashboard = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUserId(user.currentUser.uid)
  //     const dbRef = ref(getDatabase());
  //     get(child(dbRef, `users/${userId}`))
  //       .then((snapshot) => {
  //         if (snapshot.exists()) {
  //           setUsername(snapshot.val().username)
  //         } else {
  //           console.log("No data available");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } else {
  //     navigation.replace("Home");
  //   }
  // });

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          get(child(ref(db), `users/${auth.currentUser.uid}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                setUsername(snapshot.val().username);
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          navigation.replace("Home");
        }
      } catch (error) {
        console.error("here: " + error);
      }
    };

    getUser();
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      await AsyncStorage.removeItem("user");
      navigation.replace("Home"); // Replace current screen with Home screen
    } catch (error) {
      console.error(error);
    }
  };

  const handleChat = () => {
    navigation.navigate("UserList");
  };

  return (
    <View style={styles.containerMain}>

          <Pressable onPress={() => navigation.navigate('FeedScreen')}>
              <View style={styles.marketBox} >
                  <Text style={styles.boxText}> Ruil Kas </Text>
              </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('KnnVerken')}>
              <View style={styles.plantfinderBox}>
                  <Text style={styles.boxText}> Plantverkennert </Text>
              </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('UserList')}>
              <View style={styles.galleryBox}>
                  <Text style={styles.boxText}> Chats </Text>
              </View>
          </Pressable>
          <View style={styles.buttonContainer}>
              <View style={styles.space} />

              <Button className="account-btn" title="Logout" color="#ffbdbd" onPress={handleLogout} />

          </View>
      </View>
    // <Container>
    //   <ContentContainer>
    //     <View style={styles.container}>
    //       <Text>This is your Dashboard!</Text>
    //       {user ? (
    //         <>
    //           <Text style={styles.text}>Username: {username}</Text>
    //           <Button title="Logout" onPress={handleLogout} />
    //           <Button title="Chat" onPress={handleChat} />
    //           <Button
    //             title="Voeg een plant toe"
    //             onPress={() =>
    //               navigation.navigate("AddPlant", { plantToEdit: null })
    //             }
    //           />
    //           <View style={styles.space} />
    //           <Button
    //             title="Ruilkas"
    //             onPress={() =>
    //               navigation.navigate("Feed", { userId: auth.currentUser.uid })
    //             }
    //           />
    //           <View style={styles.space} />
    //           <Button
    //             title="Mijn ruilkas"
    //             onPress={() => navigation.navigate("Feed")}
    //           />
    //         </>
    //       ) : (
    //         <Text style={styles.text}>You are not logged in</Text>
    //       )}
    //     </View>
    //   </ContentContainer>
    //   <Footer navigation={navigation} />
    // </Container>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  boxText: {
    color: "#faf9f7",
    fontSize: 30,
  },

  marketBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#e07a5f",
    marginBottom: 10,
  },

  plantfinderBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9ed267",
    width: 300,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },

  galleryBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#7cd3c3",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    margin: 10,
  },
  space: {
    width: 10,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // text: {
  //   fontSize: 18,
  //   marginTop: 10,
  // },
});

export default Dashboard;
