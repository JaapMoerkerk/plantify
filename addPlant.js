import React, { useState } from "react";
import { Alert, View, Text, Button, StyleSheet, Pressable} from "react-native";
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
        // userId: userId,
        name: plantName,
        image: image,
        location: location,
        description: description
      });
      navigation.navigate('Feed');
    };

    

    // useEffect(() => {
    //   if (clientToEdit) {
    //     const {
    //       plantName: editedPlantName,
    //       image: editedImage,
    //       location: editedLocation,
    //       description: editedDescription,
    //     } = clientToEdit;
    //     setName(editedPlantName);
    //     setPhone(editedImage);
    //     setEmail(editedLocation);
    //     setCompany(editedDescription);
    //   }
    // }, [clientToEdit]);
    
  return (

    <View style={styles.main}>

      <Text style={styles.text}> jouw plant </Text>
      <Text style={styles.smallerText}> voeg hier de details toe van de plant die je in de ruil kas wilt zetten</Text>

      <TextInput
        label="Naam"
        value={plantName}
        onChangeText={setPlantName}
        placeholder="Naam"
        style={styles.field}
        mode="outlined"
        outlineColor="#faf9f7"
        activeOutlineColor="#1a1a1a"
      />

      <TextInput
        label="Afbeelding"
        value={image}
        onChangeText={setImage}
        placeholder="+"
        style={styles.field}
        mode="outlined"
        outlineColor="#faf9f7"
        activeOutlineColor="#1a1a1a"
      />

      <TextInput
        label="Locatie"
        value={location}
        onChangeText={setLocation}
        placeholder="Locatie"
        style={styles.field}
        mode="outlined"
        outlineColor="#faf9f7"
        activeOutlineColor="#1a1a1a"
      />

      <TextInput
        label="Omschrijving"
        value={description}
        onChangeText={setDescription}
        placeholder="Omschrijving"
        style={styles.field}
        mode="outlined"
        outlineColor="#faf9f7"
        activeOutlineColor="#1a1a1a"
      />

      <Pressable onPress={this.saveData}>
        <View  style={styles.button}>
          <Text style={styles.buttonText}> toevoegen </Text>
        </View>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e07a5f',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'center'
  },

  field: {
    backgroundColor: '#faf9f7',
    width: 225,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#f0c6ba',
    height: 50,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  smallerText: {
    textAlign: 'center',
    width: '70%',
    fontSize: 15,
    marginBottom: 15
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 17
  }
})

export default NewPlant;
