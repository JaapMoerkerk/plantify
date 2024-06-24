import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './navbarStyles'

const Navbar = () => {
  return (
      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Image source={require('../../../assets/img/navbar/star.png')} style={styles.navbarImg} />
        </View>
        <View style={styles.navItem}>
          <Image source={require('../../../assets/img/navbar/gear.png')} style={styles.navbarImg} />
        </View>
      </View>

  );
};
export default Navbar;
