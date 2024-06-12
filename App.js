// app.js

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './dashboard';
import Test from './test';
import Test1 from './test1';
import Test2 from './test2';
import FeedScreen from './feedscreen';
import FeedDetail from './feeddetail';
import AddPlant from './addPlant';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App</Text>
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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
        <Stack.Screen name="AddPlant" component={AddPlant} />
        <Stack.Screen name="Ruilplanten" component={FeedScreen} />
        <Stack.Screen name="test" component={Test} />
        <Stack.Screen name="test1" component={Test1} />
        <Stack.Screen name="test2" component={Test2} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
