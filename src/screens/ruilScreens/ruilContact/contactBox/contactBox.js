import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './contactBoxStyles'

const ContactBox = () => {
  return (
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.contactContainer}>
          <Text style={styles.header}>Contact</Text>
          <View style={styles.contactBox}>

            <View style={styles.userInfo}>

              <View style={styles.contactCircle}>
                <Image source={require('../../../../../assets/img/contact/woman.png')} style={styles.contactLogo} />
              </View>

              <View style={styles.userInfoText}>
                <Text style={styles.contactName}>Vera van den Berg</Text>
                <Text style={styles.contactAddress}>Rotterdam Noord</Text>
              </View>

            </View>

            <View style={styles.contactOption}>
              <View style={styles.contactCircle}>
                <Image source={require('../../../../../assets/img/contact/email.png')} style={styles.contactLogo} />
              </View>
              <Text style={styles.contactInfo}>mailadress@mail.com</Text>
            </View>

            <View style={styles.contactOption}>
              <View style={styles.contactCircle}>
                <Image source={require('../../../../../assets/img/contact/camera.png')} style={styles.contactLogo} />
              </View>
              <Text style={styles.contactInfo}>@instagram_user</Text>
            </View>

            <View style={styles.contactOption}>
              <View style={styles.contactCircle}>
                <Image source={require('../../../../../assets/img/contact/bird.png')} style={styles.contactLogo} />
              </View>
              <Text style={styles.contactInfo}>@twitter_user</Text>
            </View>

          </View>

        </View>

      </ScrollView>

  );
};
export default ContactBox;
