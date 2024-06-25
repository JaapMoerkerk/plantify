import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './footerStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getAuth } from "firebase/auth";

// Import your screen components here
import FeedScreen from '../../../feedscreen';
import ChatScreen from '../../../Chatscreen';
import Home from '../../../App';
import Verken from '../../screens/verkenScreens/verken/verken';


import {BottomNavigation} from "react-native-paper";

const auth = getAuth();

// const Tab = createBottomTabNavigator();
const Footer = ({navigation}) => {
    return (
        // <Tab.Navigator>
        <View style={styles.footerItems}>

            <Pressable style={[styles.footerItem, styles.home]} onPress={() => navigation.navigate('Dashboard')}>
                <Image source={require('../../../assets/img/footer/home.png')} style={styles.footerImg} />
            </Pressable>

            <Pressable style={[styles.footerItem, styles.trade]} onPress={() => navigation.navigate('Feed')}>
                <Image source={require('../../../assets/img/footer/greenhouse.png')} style={styles.footerImg} />
            </Pressable>

            <Pressable style={[styles.footerItem, styles.find]} onPress={() => navigation.navigate('KnnVerken')}>
                <Image source={require('../../../assets/img/footer/creativity.png')} style={styles.footerImg} />
            </Pressable>

            <Pressable style={[styles.footerItem, styles.collection]} onPress={() => navigation.navigate('UserList')}>
                <Image source={require('../../../assets/img/footer/chat.png')} style={styles.footerImg} />
            </Pressable>


        </View>
        // </Tab.Navigator>

    );
};
export default Footer;