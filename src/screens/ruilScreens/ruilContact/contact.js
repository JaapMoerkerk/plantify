import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Container from '../../../components/container/container.js';
import Navbar from '../../../components/navbar/navbar.js';
import ContactBox from '../../../components/contact-box/contact-box.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './contact-styles';

const Contact = ({ navigation }) => {
  return (
      <Container>
          <Navbar/>
          <ContactBox/>
          <ButtonBox/>
          <Footer/>
      </Container>
  )
};
export default Contact;
