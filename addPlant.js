import React, { useState, useEffect } from "react";
import { Alert, View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import {
  getDatabase,
  getInstance,
  ref,
  set,
  get,
  push,
  child,
  update
} from "firebase/database";
import { getAuth } from "firebase/auth";
import FeedScreen from "./feedscreen";
import firebaseApp from "./firebaseConfig";

//const app = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
// const auth = getAuth();

// const userId = auth.currentUser.uid;
const userId = 1;

const NewPlant = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  // const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const { plantToEdit } = route.params;

  const newPlant = {
    name,
    userId,
    img,
    // location,
    description
  }

  saveData = async () => {
    const newPostKey = push(child(ref(db), "Stekjes")).key;

    if (plantToEdit !== null) {
      const updates = {};
      updates["Stekjes/" + plantToEdit.userId ] = newPlant;
      update(ref(db), updates);
      navigation.navigate("Feed", { userId });
    } else {
      set(ref(db, "Stekjes/" + newPostKey), {
        id: newPostKey,
        userId: userId,
        name: name,
        img: img,
        // location: location,
        description: description,
      });
      navigation.navigate("Feed");
    }
  };

  useEffect(() => {
    if (plantToEdit !== null) {
      const {
        name: editedName,
        img: editedImg,
        // location: editedLocation,
        description: editedDescription,
      } = plantToEdit;
      setName(editedName);
      setImg(editedImg);
      // setLocation(editedLocation);
      setDescription(editedDescription);
    }
  }, [plantToEdit]);

  return (
    <View>
      <TextInput
        label="Naam"
        value={name}
        onChangeText={setName}
        placeholder="Naam"
      />
      <TextInput
        label="Afbeelding"
        value={img}
        onChangeText={setImg}
        placeholder="+"
      />
      {/* <TextInput
        label="Locatie"
        value={location}
        onChangeText={setLocation}
        placeholder="Locatie"
      /> */}
      <TextInput
        label="Omschrijving"
        value={description}
        onChangeText={setDescription}
        placeholder="Omschrijving"
      />
      <Button title="Add Plant!" onPress={this.saveData} />
    </View>
  );
};

export default NewPlant;
