import React from 'react';
import "contact.sass";
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactBox from '.../contact-box/contact-box';

var styles = require(.../contact-styles');

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact">

        <Container>
            <Navbar />

      <ScrollView contentContainerStyle={styles.main}>
        <ContactBox />
      </ScrollView>

            <Footer />

    </Container>

          </Stack.Navigator>
        </NavigationContainer>
  );
};
export default App;
