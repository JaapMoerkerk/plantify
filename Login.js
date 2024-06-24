import React, { useState } from 'react';
import auth from '@react-native-firebase/auth'
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import firebaseApp from './firebaseConfig';
import{getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from './src/components/footer/footer.js';
import ContentContainer from './src/components/contentContainer/contentContainer.js';
import Container from './src/components/containerPink/containerPink.js';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  return (
      <Container>
          <ContentContainer>
      <View style={styles.container}>
          <View style={styles.box}>
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
    </View>
          </ContentContainer>
          <Footer navigation={navigation}/>
      </Container>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
        backgroundColor: '#faf9f7'
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
  registerText: {
    marginTop: 16,
    color: '#143635',
    textAlign: 'center',
  },
});

export default Login;
