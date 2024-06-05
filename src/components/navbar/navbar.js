import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './navbarStyle'

const Navbar = () => {
  return (
      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Image source={require('./star.png')} style={styles.navbarImg} />
        </View>
        <View style={styles.navItem}>
          <Image source={require('./gear.png')} style={styles.navbarImg} />
        </View>
      </View>

  );
};
export default Navbar;
