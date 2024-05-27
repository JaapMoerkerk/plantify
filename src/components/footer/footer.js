import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import styles from './footer-styles';

const Footer = () => {
  return (
      <View style={styles.footer}>

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.footerButton}>
            <Text style={styles.footerButtonText}>terug naar post</Text>
          </Pressable>
        </View>

        <View style={styles.footerItems}>

          <Pressable style={[styles.footerItem, styles.home]}>
            <Image source={require('./footer-img/home.png')} style={styles.footerImg} />
          </Pressable>

          <Pressable style={[styles.footerItem, styles.trade]}>
            <Image source={require('./footer-img/plant.png')} style={styles.footerImg} />
          </Pressable>

          <Pressable style={[styles.footerItem, styles.find]}>
            <Image source={require('./footer-img/creativity.png')} style={styles.footerImg} />
          </Pressable>

          <Pressable style={[styles.footerItem, styles.collection]}>
            <Image source={require('./footer-img/greenhouse.png')} style={styles.footerImg} />
          </Pressable>

        </View>

      </View>
  );
};
export default Footer;
