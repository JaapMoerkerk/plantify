// app.js

import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './dashboard';
import Test from './test';
import Test1 from './test1';
import Test2 from './test2';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (

    <View style = {styles.container} >
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    <Dashboard></Dashboard>
    </View>
  );
};

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
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
