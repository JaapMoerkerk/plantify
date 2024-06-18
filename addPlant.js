import React, { useState, useEffect } from "react";
import { Alert, View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { getDatabase, getInstance, ref, set, get, push, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import FeedScreen from "./feedscreen";
import firebaseApp from "./firebaseConfig";

const db = getDatabase(firebaseApp);
// const auth = getAuth();

// const userId = auth.currentUser.uid;
const userId = 1;

const NewPlant = ({ navigation, route }) => {
  const [plantName, setPlantName] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
};

saveData = async () => {
  const newPostKey = push(child(ref(db), "Stekjes")).key;

  // if (route.params) {
  //   console.log("here")
  // //   const { id } = plantToEdit;
  // //   updates["Stekjes/" + id + "/" + newPostKey] = postData;
  // //   update(ref(db), updates);
  // } else {
    console.log("no here")
    set(ref(db, "Stekjes/" + newPostKey), {
      id: newPostKey,
      userId: userId,
      name: plantName,
      img: image,
      location: location,
      description: description,
    });
    navigation.navigate("Feed");
  // }

  // useEffect(() => {
  //   if (route.params) {
  //     const { plantToEdit } = route.params;
  //     const {
  //       plantName: editedPlantName,
  //       image: editedImage,
  //       location: editedLocation,
  //       description: editedDescription,
  //     } = plantToEdit;
  //     setName(editedPlantName);
  //     setImage(editedImage);
  //     setLocation(editedLocation);
  //     setDescription(editedDescription);
  //   }
  // }, [plantToEdit]);

  return (
    <View>
      <TextInput
        label="Naam"
        value={plantName}
        onChangeText={setPlantName}
        placeholder="Naam"
      />
      <TextInput
        label="Afbeelding"
        value={image}
        onChangeText={setImage}
        placeholder="+"
      />
      <TextInput
        label="Locatie"
        value={location}
        onChangeText={setLocation}
        placeholder="Locatie"
      />
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
