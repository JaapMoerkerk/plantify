import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import styles from './footerStyle';

const Footer = () => {
  return (
        <View style={styles.footerItems}>

          <Pressable style={[styles.footerItem, styles.home]}>
            <Image source={require('./home.png')} style={styles.footerImg} />
          </Pressable>

          <Pressable style={[styles.footerItem, styles.trade]}>
            <Image source={require('./plant.png')} style={styles.footerImg} />
          </Pressable>

          <Pressable style={[styles.footerItem, styles.find]}>
            <Image source={require('./creativity.png')} style={styles.footerImg} />
          </Pressable>

          <Pressable style={[styles.footerItem, styles.collection]}>
            <Image source={require('./greenhouse.png')} style={styles.footerImg} />
          </Pressable>

        </View>
  );
};
export default Footer;
