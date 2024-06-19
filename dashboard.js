import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from './firebaseConfig';

const Tab = createBottomTabNavigator();

// Dummy components for the tabs
const FeedScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Feed Screen</Text>
  </View>
);

const AddPlantScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Add Plant Screen</Text>
  </View>
);

const ChatScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Chat Screen</Text>
  </View>
);

const DashboardContent = ({ navigation, route }) => {
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
          navigation.replace('Home');
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

const Dashboard = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to your Dashboard!</Text>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Add Plant') {
              iconName = focused ? 'leaf' : 'leaf-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 },
        })}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Add Plant" component={AddPlantScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Dashboard;
