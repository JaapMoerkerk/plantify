import React from 'react';
import "contact.sass";
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

var styles = require(.../navbar-styles');

const Navbar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navbar">

    <View style={styles.container}>

      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Image source={require('.../navbar-img/star.png')} style={styles.navbarImg} />
        </View>
        <View style={styles.navItem}>
          <Image source={require('.../navbar-img/gear.png')} style={styles.navbarImg} />
        </View>
      </View>

    </View>

          </Stack.Navigator>
        </NavigationContainer>
  );
};
export default App;
