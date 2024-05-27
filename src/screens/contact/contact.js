import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Container from '../../components/container/container.js';
import Navbar from '../../components/navbar/navbar.js';
import Footer from '../../components/footer/footer.js';
import ContactBox from '../../components/contact-box/contact-box.js';
import styles from './contact-styles';

const Contact = ({ navigation }) => {
  return (
      <Container>
          <Navbar/>
          <ContactBox/>
          <Footer/>
      </Container>
  )
};
export default Contact;
