import React, { useState, useEffect } from "react";
import { Alert, View, Text, Button, StyleSheet, Pressable } from "react-native";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import FeedScreen from "./feedscreen";
import firebaseApp from "./firebaseConfig";

const db = getDatabase(firebaseApp);

const auth = getAuth();

const NewPlant = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const { plantToEdit } = route.params;
  const [userId, setUserId] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.currentUser.uid);
    } else {
      navigation.replace("Home");
    }
  });


  saveData = async () => {
    const newPostKey = push(child(ref(db), "Stekjes")).key;

    if (plantToEdit !== null) {
      const newPlant = {
        id: plantToEdit.id,
        name,
        userId,
        img,
        description
      }

      const updates = {};
      updates["Stekjes/" + plantToEdit.id ] = newPlant;
      update(ref(db), updates);
    } else {
      set(ref(db, "Stekjes/" + newPostKey), {
        id: newPostKey,
        userId: userId,
        name: name,
        img: img,
        description: description,
      });
    }
    navigation.navigate("Feed", { userId });
  };

  useEffect(() => {
    if (plantToEdit !== null) {
      const {
        name: editedName,
        img: editedImg,
        description: editedDescription,
      } = plantToEdit;
      setName(editedName);
      setImg(editedImg);
      setDescription(editedDescription);
    }
  }, [plantToEdit]);

  return (

    <View style={styles.main}>

      <Text style={styles.text}> jouw plant </Text>
      <Text style={styles.smallerText}> voeg hier de details toe van de plant die je in de ruil kas wilt zetten</Text>

      <TextInput
        label="Naam"
        value={name}
        onChangeText={setName}
        placeholder="Naam"
        style={styles.field}
        mode="outlined"
        outlineColor="#faf9f7"
        activeOutlineColor="#1a1a1a"
      />

      <TextInput
        label="Afbeelding"
        value={img}
        onChangeText={setImg}
        placeholder="+"
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
      {plantToEdit !== null ?
      <Pressable onPress={this.saveData}>
              <View  style={styles.button}>
                <Text style={styles.buttonText}> Wijzig plant </Text>
              </View>
            </Pressable>:
      <Pressable onPress={this.saveData}>
              <View  style={styles.button}>
                <Text style={styles.buttonText}> Voeg plant toe! </Text>
              </View>
            </Pressable>
      }




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
