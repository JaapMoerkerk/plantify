import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './footerStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screen components here
import FeedScreen from '../../../feedscreen';
import {BottomNavigation} from "react-native-paper";

// const Tab = createBottomTabNavigator();
const Footer = ({navigation}) => {
    return (
        // <Tab.Navigator>
        <View style={styles.footerItems}>

            <Pressable style={[styles.footerItem, styles.home]} onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../assets/img/footer/home.png')} style={styles.footerImg} />
            </Pressable>

            <Pressable style={[styles.footerItem, styles.trade]} onPress={() => navigation.navigate('FeedScreen')}>
                <Image source={require('../../../assets/img/footer/greenhouse.png')} style={styles.footerImg} />
            </Pressable>

            <Pressable style={[styles.footerItem, styles.find]} onPress={() => navigation.navigate('Plantverkennert')}>
                <Image source={require('../../../assets/img/footer/creativity.png')} style={styles.footerImg} />
            </Pressable>

            <Pressable style={[styles.footerItem, styles.collection]} onPress={() => navigation.navigate('Veranda')}>
                <Image source={require('../../../assets/img/footer/growingplants.png')} style={styles.footerImg} />
            </Pressable>


        </View>
        // </Tab.Navigator>

    );
};
export default Footer;