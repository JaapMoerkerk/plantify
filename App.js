import React from "react";
import {StyleSheet, View, Text, Button, Pressable, Image} from "react-native";
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
        <View style={styles.containerMain}>
            {/*<Pressable onPress={() => navigation.navigate('FeedScreen')}>*/}
            {/*    <View style={styles.marketBox} >*/}
            {/*        <View style={styles.logoCircle}>*/}
            {/*            <Image source={require('./assets/img/footer/greenhouse.png')} style={styles.footerImg} style={styles.logo}/>*/}
            {/*        </View>*/}
            {/*        <Text style={styles.boxText}> Ruil Kas </Text>*/}
            {/*    </View>*/}
            {/*</Pressable>*/}

            {/*<Pressable onPress={() => navigation.navigate('KnnVerken')}>*/}
            {/*    <View style={styles.plantfinderBox}>*/}
            {/*        <View style={styles.logoCircle}>*/}
            {/*            <Image source={require('./assets/img/footer/creativity.png')} style={styles.footerImg} style={styles.logo}/>*/}
            {/*        </View>*/}
            {/*        <Text style={styles.boxText}> Plantverkennert </Text>*/}
            {/*    </View>*/}
            {/*</Pressable>*/}

            {/*<Pressable onPress={() => navigation.navigate('ChatScreen')}>*/}
            {/*    <View style={styles.galleryBox}>*/}
            {/*        <View style={styles.logoCircle}>*/}
            {/*            <Image source={require('./assets/img/footer/chat.png')} style={styles.footerImg} style={styles.logo}/>*/}
            {/*        </View>*/}
            {/*        <Text style={styles.boxText}> Chats </Text>*/}
            {/*    </View>*/}
            {/*</Pressable>*/}

            <Pressable onPress={() => navigation.navigate("Login")}>
                <View style={styles.marketBox}>
                    <Text style={styles.boxText}> Login </Text>
                </View>
            </Pressable>
            {/* <View style={styles.marketBox}>
          <Text style={styles.boxText}> Ruil Kas </Text>
              <Button className="account-btn" title="Login" color="#ffbdbd" onPress={() => navigation.navigate('Login')} />
            </View>
            <View style={styles.space} /> */}

            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.marketBox}>
                    <Text style={styles.boxText}> Registreren </Text>
                </View>
            </Pressable>

            {/* <Button
        className="account-btn"
        title="Registreren"
        color="#ffbdbd"
        onPress={() => navigation.navigate("Register")}
      /> */}
        </View>
        //   <View style={styles.container}>
        //     <Text style={styles.title}>Welcome to Your App</Text>
        //     <View style={styles.buttonContainer}>
        //       <Button className="account-btn" title="Registreren" onPress={() => navigation.navigate('Register')} />
        //       <View style={styles.space} />
        //       <Button className="account-btn" title="Login" onPress={() => navigation.navigate('Login')} />
        //       </View>
        //     <View style={styles.content}>
        //            <View style={styles.horizontalLine} />
        //            <View style={styles.buttonContainer}>
        //                   <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        //                    <View style={styles.space} />
        //                    <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
        //                    </View>
        //                    <View style={styles.horizontalLine} />
        //                    <View style={styles.buttonContainer}>
        //                   <Button title="Add Plant" onPress={() => navigation.navigate('AddPlant')} />
        //                   <View style={styles.space} />
        //                  <Button title="Ruilplanten" onPress={() => navigation.navigate('Feed', { userId })} />
        //                  <View style={styles.space} />
        //                   <Button title="Go to KnnVerken" onPress={() => navigation.navigate('KnnVerken')} />
        //                     </View>
        //             </View>
        //             </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ animationEnabled: false }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Start pagina",
                        headerStyle: {
                            backgroundColor: "#ffbdbd",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        title: "Dashboard",
                        headerStyle: {
                            backgroundColor: "#ffbdbd",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="FeedScreen"
                    component={FeedScreen}
                    options={{
                        title: "Ruil Kas",
                        headerStyle: {
                            backgroundColor: "#e07a5f",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="FeedDetail"
                    component={FeedDetail}
                    options={{
                        title: "Ruil Kas post",
                        headerStyle: {
                            backgroundColor: "#e07a5f",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="AddPlant"
                    component={AddPlant}
                    options={{
                        title: "Post een plant",
                        headerStyle: {
                            backgroundColor: "#e07a5f",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="ruilContact"
                    component={RuilContact}
                    options={{
                        title: "Contact",
                        headerStyle: {
                            backgroundColor: "#e07a5f",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="KnnVerken"
                    component={KnnVerken}
                    options={{
                        title: "Plantverkennert",
                        headerStyle: {
                            backgroundColor: "#9ed267",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: "Registreer",
                        headerStyle: {
                            backgroundColor: "#ffbdbd",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "Login",
                        headerStyle: {
                            backgroundColor: "#ffbdbd",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{
                        title: "Chat met buurtgenoot",
                        headerStyle: {
                            backgroundColor: "#7cd3c3",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={{
                        title: "Chat met buurtgenoten",
                        headerStyle: {
                            backgroundColor: "#7cd3c3",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        title: "Chats",
                        headerStyle: {
                            backgroundColor: "#7cd3c3",
                            borderBottomColor: "#faf9f7",
                            borderBottomWidth: 1,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    boxText: {
        color: "#faf9f7",
        fontSize: 30,
    },

    marketBox: {
        flexDirection: 'row',
        margin: 5,
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 100,
        borderRadius: 20,
        backgroundColor: "#e07a5f",
        marginBottom: 10,
    },

    plantfinderBox: {
        flexDirection: 'row',
        margin: 5,
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9ed267",
        width: 300,
        height: 100,
        borderRadius: 20,
        marginBottom: 10,
    },

    galleryBox: {
        flexDirection: 'row',
        margin: 5,
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 100,
        borderRadius: 20,
        backgroundColor: "#7cd3c3",
    },


    logoCircle: {
        borderRadius: 50,
        backgroundColor: 'white',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    logo: {
        height: '70%',
        width: '70%',
    },

    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#f0f0f0',
    //     padding: 20,
    // },
    // title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginBottom: 20,
    //     textAlign: 'center',
    // },
    // content: {
    //     flex: 1,
    //     justifyContent: 'flex-end',
    // },
    // horizontalLine: {
    //     height: 2,
    //     backgroundColor: '#ccc',
    //     alignSelf: 'stretch',
    //     marginBottom: 10,
    // },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
        margin: 10,
    },
    space: {
        width: 10,
    },
});

export default App;
