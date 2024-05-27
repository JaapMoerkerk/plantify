import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './contact-box-styles'

const ContactBox = () => {
  return (
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.contactContainer}>
          <Text style={styles.header}>Contact</Text>
          <View style={styles.contactBox}>

            <View style={styles.userInfo}>

              <View style={styles.contactCircle}>
                <Image source={require('./contact-box-img/woman.png')} style={styles.contactLogo} />
              </View>

              <View style={styles.userInfoText}>
                <Text style={styles.contactName}>Vera van den Berg</Text>
                <Text style={styles.contactAddress}>Rotterdam Noord</Text>
              </View>

            </View>

            <View style={styles.contactOption}>
              <View style={styles.contactCircle}>
                <Image source={require('./contact-box-img/email.png')} style={styles.contactLogo} />
              </View>
              <Text style={styles.contactInfo}>mailadress@mail.com</Text>
            </View>

            <View style={styles.contactOption}>
              <View style={styles.contactCircle}>
                <Image source={require('./contact-box-img/camera.png')} style={styles.contactLogo} />
              </View>
              <Text style={styles.contactInfo}>@instagram_user</Text>
            </View>

            <View style={styles.contactOption}>
              <View style={styles.contactCircle}>
                <Image source={require('./contact-box-img/bird.png')} style={styles.contactLogo} />
              </View>
              <Text style={styles.contactInfo}>@twitter_user</Text>
            </View>

          </View>

        </View>

      </ScrollView>

  );
};
export default ContactBox;
