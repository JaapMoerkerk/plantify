import React, { useState } from "react";
import { Alert, View, Text, Button, StyleSheet } from "react-native";
import {TextInput} from "react-native-paper";
import { getInstance, ref, set, get, push, child } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import FeedScreen from './feedscreen';

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
// const auth = getAuth();

// const userId = auth.currentUser.uid;
const userId = 1;


const NewPlant = ({ navigation }) => {
  const [plantName, setPlantName] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  // const newPlant = {
  //   plantName,
  //   image,
  //   location,
  //   description,
  // };
  
  
  saveData = async () => {
  // const dbRef = ref(db);
  // get(child(dbRef, '/Stekjes/1')).then((snapshot) => {
    //   if (snapshot.exists()) {
      //     console.log(snapshot.val());
      //   } else {
        //     console.log("No data available");
  //   }
  // }).catch((error) => {
    //   console.error(error);
    // });
        
    const newPostKey = push(child(ref(db), 'Stekjes')).key;

    set(ref(db, 'Stekjes/' + newPostKey), {
        id: newPostKey,
        userId: userId,
        name: plantName,
        image: image,
        location: location,
        description: description
      });
      navigation.navigate('Feed');
    };

    

    useEffect(() => {
      if (route.params) {
        const { plantToEdit } = route.params;
        const {
          plantName: editedPlantName,
          image: editedImage,
          location: editedLocation,
          description: editedDescription,
        } = plantToEdit;
        setName(editedPlantName);
        setPhone(editedImage);
        setEmail(editedLocation);
        setCompany(editedDescription);
      }
    }, [plantToEdit]);
    
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
