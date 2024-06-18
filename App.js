import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './dashboard';
import Register from './Register';
import Login from './Login';
import firebase from './firebaseConfig';
import FeedScreen from './feedscreen';
import FeedDetail from './feeddetail';
import AddPlant from './addPlant';
import RuilContact from './src/screens/ruilScreens/ruilContact/ruilContact.js';


const Stack = createStackNavigator();

// const auth = getAuth();

// const userId = auth.currentUser.uid;
const userId = 1;

const HomeScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
       <Button title="Go to contact" onPress={() => navigation.navigate('ruilContact')} />
      <Text style={styles.title}>Welcome to Your App</Text>
      <View style={styles.buttonContainer}>
      <Button className="account-btn" title="Register" onPress={() => navigation.navigate('Register')} />
                <View style={styles.space} />
                <Button className="account-btn" title="Login" onPress={() => navigation.navigate('Login')} />
                </View>
      <View style={styles.content}>
        <View style={styles.horizontalLine} />
        <View style={styles.buttonContainer}>
          <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
          <View style={styles.space} />
          <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
          <Button title="Add Plant" onPress={() => navigation.navigate('AddPlant')} />
          <Button title="Ruilplanten" onPress={() => navigation.navigate('Feed', { userId })} />
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animationEnabled:false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
        <Stack.Screen name="AddPlant" component={AddPlant} />
        <Stack.Screen name="Ruilplanten" component={FeedScreen} />
        <Stack.Screen name="ruilContact" component={RuilContact} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#ccc',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  space: {
    width: 10,
  },
});

export default App;