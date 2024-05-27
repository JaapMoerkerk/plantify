import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './navbar-styles'

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Image source={require('./navbar-img/star.png')} style={styles.navbarImg} />
        </View>
        <View style={styles.navItem}>
          <Image source={require('./navbar-img/gear.png')} style={styles.navbarImg} />
        </View>
      </View>
    </View>
  );
};
export default Navbar;
