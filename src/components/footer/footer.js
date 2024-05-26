import React from 'react';
import "contact.sass";
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

var styles = require(.../footer-styles');

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact">

    <View style={styles.container}>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>terug naar post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerItems}>
          <View style={[styles.footerItem, styles.home]}>
            <Image source={require('./img/footer/home.png')} style={styles.footerImg} />
          </View>
          <View style={[styles.footerItem, styles.trade]}>
            <Image source={require('./img/footer/plant.png')} style={styles.footerImg} />
          </View>
          <View style={[styles.footerItem, styles.find]}>
            <Image source={require('./img/footer/creativity.png')} style={styles.footerImg} />
          </View>
          <View style={[styles.footerItem, styles.collection]}>
            <Image source={require('./img/footer/greenhouse.png')} style={styles.footerImg} />
          </View>
        </View>
      </View>

    </View>

          </Stack.Navigator>
        </NavigationContainer>
  );
};
export default App;
