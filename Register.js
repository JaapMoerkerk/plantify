// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import firebaseApp from './firebaseConfig';
import{getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from "firebase/database";
// import Footer from './src/components/footer/footer.js';
import ContentContainer from './src/components/contentContainer/contentContainer.js';
import Container from './src/components/containerPink/containerPink.js';
const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    try {
      // Create user with email and password
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Realtime Database
      const db = getDatabase(firebaseApp)
      await set(ref(db, `/users/${user.uid}`), {
        email: user.email,
        username: username,
      });

      Alert.alert('Gelukt!', 'Je wordt nu omgeleid naar de login pagina.');
      navigation.navigate('Login'); // Navigate to login screen after successful registration
    } catch (error) {
      console.error(error);
      Alert.alert('Fout opgetreden', 'Er ging helaas iets mis bij het registeren. Error:' + error.message);
    }
  };

  return (
      <Container>
          <ContentContainer>
    <View style={styles.container}>
        <View style={styles.box}>

        <Text style={styles.title}>Registreren als nieuwe gebruiker</Text>
      <TextInput
        style={styles.input}
        placeholder="Gebruikersnaam"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mailadres"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Wachtwoord"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registreren</Text>
      </Pressable>
        </View>
      </View>
</ContentContainer>
    {/*<Footer navigation={navigation}/>*/}
</Container>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#143635',
    },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    marginBottom: 16,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
    button: {
        backgroundColor: '#ffbdbd',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#143635',
        fontSize: 16,
        fontWeight: 'bold',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        // backgroundColor: '#faf9f7'
    },
    box: {
        width: '90%',
        backgroundColor: '#ffe5e5',
        borderRadius: 20,
        padding: '5%',
        margin: '5%',
        display: 'flex',
        flexDirection: 'column',
        elevation: 3,
    },

});

export default Register;