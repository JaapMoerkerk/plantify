import React from 'react';
import { Alert, View, Text, Button, StyleSheet } from 'react-native';
import { getInstance, ref, set, get, push, child} from 'firebase/database';

//import t from 'tcomb-form-native';
//import db from '@react-native-firebase/database';

//const Form = t.form.Form;
//
//const Plant = t.struct({
//name: t.String,
//image: t.String,
//location: t.String,
//description: t.String
//});


import {initializeApp} from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAILOfAvkTwyP1WRP_9WKPZN0MjmRRdw_8",
  authDomain: "plantify-50b4e.firebaseapp.com",
  databaseURL: "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plantify-50b4e",
  storageBucket: "plantify-50b4e.appspot.com",
  messagingSenderId: "757675160517",
  appId: "1:757675160517:web:7086074b1a17ab545811ac",
  databaseURL: 'https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


saveData = async () => {

const dbRef = ref(db);
get(child(dbRef, '/Stekjes/1')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

const AddPlant = ({ navigation }) => {
return(
<View>
        <Button
          title="Add Plant!"
          onPress={this.saveData}
        />
</View>
);
}

export default AddPlant;