import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./dashboard";
import Register from "./Register";
import Login from "./Login";
import firebaseApp from "./firebaseConfig";
import FeedScreen from "./feedscreen";
import FeedDetail from "./feeddetail";
import AddPlant from "./addPlant";
import RuilContact from "./src/screens/ruilScreens/ruilContact/ruilContact.js";
import KnnVerken from "./src/screens/verkenScreens/verken/verken.js";
import ChatScreen from "./Chatscreen"; // Importing the new ChatScreen
import Chat from "./Chat"; // Importing the new Chat/
import UserList from "./Userlist";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App</Text>
      <View style={styles.buttonContainer}>
        <Button className="account-btn" title="Registreren" onPress={() => navigation.navigate('Register')} />
        <View style={styles.space} />
        <Button
          className="account-btn"
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      {/* <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <View style={styles.space} />
          <Button
            title="Go to Feed"
            onPress={() => navigation.navigate("Feed")}
          />
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.buttonContainer}>
          <View style={styles.space} />
          <Button
            title="Go to KnnVerken"
            onPress={() => navigation.navigate("KnnVerken")}
          />
        </View>
      </View> */}
    </View>
  );
};

const App = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animationEnabled: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerLeft: () => null,
            title: "Dashboard",
          }}
        />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
        <Stack.Screen name="AddPlant" component={AddPlant} />
        <Stack.Screen name="Ruilplanten" component={FeedScreen} />
        <Stack.Screen name="ruilContact" component={RuilContact} />
        <Stack.Screen name="KnnVerken" component={KnnVerken} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled:false}} initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Start pagina', headerStyle: {backgroundColor: '#ffbdbd', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{title: 'Dashboard', headerStyle: {backgroundColor: '#ffbdbd', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="Feed" component={FeedScreen} options={{title: 'Ruil Kas', headerStyle: {backgroundColor: '#e07a5f', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="FeedDetail" component={FeedDetail} options={{title: 'Ruil Kas post', headerStyle: {backgroundColor: '#e07a5f', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="AddPlant" component={AddPlant} options={{title: 'Post een plant', headerStyle: {backgroundColor: '#e07a5f', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="ruilContact" component={RuilContact} options={{title: 'Contact', headerStyle: {backgroundColor: '#e07a5f', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="KnnVerken" component={KnnVerken} options={{title: 'Plantverkennert', headerStyle: {backgroundColor: '#9ed267', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="Register" component={Register} options={{title: 'Registreer', headerStyle: {backgroundColor: '#ffbdbd', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="Login" component={Login} options={{title: 'Login', headerStyle: {backgroundColor: '#ffbdbd', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="ChatScreen" component={ChatScreen} options={{title: 'Chat met buurtgenoot', headerStyle: {backgroundColor: '#7cd3c3', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
                <Stack.Screen name="Chat" component={Chat} options={{title: 'Chats', headerStyle: {backgroundColor: '#7cd3c3', borderBottomColor: '#faf9f7', borderBottomWidth: 1,},}}/>
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
