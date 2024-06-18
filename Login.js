import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet, Alert } from 'react-native';
import firebaseApp from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Dashboard'); // Navigate to home screen after successful login
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
      <Text
        style={styles.registerText}
        onPress={() => navigation.navigate('Register')}
      >
        Nog geen account? Klik hier.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#e07a5f'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: '#fff',
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
        backgroundColor: '#f0c6ba',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
      },
      buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
      },
  registerText: {
    marginTop: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Login;