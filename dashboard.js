import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import Navbar from '../../../components/navbar/navbar.js';

const Dashboard = ({ navigation }) => {

  return (

    <View>

      <Navbar />

      <View style={styles.containerMain}>

        <Pressable onPress={() => navigation.navigate('test')}>
          <View style={styles.marketBox} >
            <Text> Ruil kas </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('test1')}>
          <View style={styles.plantfinderBox}>
            <Text> Plant verkennert </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('test2')}>
          <View style={styles.galleryBox}>
            <Text> Mijn veranda </Text>
          </View>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  marketBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#e07a5f',
    marginBottom: 10,
  },
  
  plantfinderBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ed267',
    width: 300,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },

  galleryBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#7cd3c3',
  }
});

export default Dashboard;
