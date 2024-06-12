import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from './firebaseConfig';

const Dashboard = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const user = JSON.parse(userData);
          setUser(user);
          // Fetch user details from Firebase
          const userRef = firebase.database().ref(`/users/${user.uid}`);
          userRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
              setUsername(data.username);
            }
          });
        } else {
          navigation.replace('Login');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      await AsyncStorage.removeItem('user');
      navigation.replace('Home'); // Replace current screen with Home screen
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>This is your Dashboard!</Text>
      {user ? (
        <>
          <Text style={styles.text}>Username: {username}</Text>
          <Button title="Logout" onPress={handleLogout} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Dashboard;
