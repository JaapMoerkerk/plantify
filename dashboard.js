// Dashboard.js
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseApp from "./firebaseConfig";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
    <View style={styles.container}>
      <Text>This is your Dashboard!</Text>
      {user ? (
        <>
          <Text style={styles.text}>Username: {username}</Text>
          <Button title="Logout" onPress={handleLogout} />
          <Button title="Chat" onPress={handleChat} />
          <Button
            title="Add Plant"
            onPress={() =>
              navigation.navigate("AddPlant", { plantToEdit: null })
            }
          />
          <View style={styles.space} />
          <Button
            title="Ruilplanten"
            onPress={() =>
              navigation.navigate("Feed", { userId: auth.currentUser.uid })
            }
          />
        </>
      ) : (
        <Text style={styles.text}>You are not logged in</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Dashboard;
