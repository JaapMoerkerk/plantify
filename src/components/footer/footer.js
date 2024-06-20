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



                <View style={[styles.footerItem, styles.trade]}>
                    <Image source={require('../../../assets/img/footer/greenhouse.png')} style={styles.footerImg} />
                </View>

                <View style={[styles.footerItem, styles.find]}>
                    <Image source={require('../../../assets/img/footer/creativity.png')} style={styles.footerImg} />
                </View>

                <Pressable style={[styles.footerItem, styles.find]} onPress={() => navigation.navigate('FeedScreen')}>
                    <Image source={require('../../../assets/img/footer/greenhouse.png')} style={styles.footerImg} />
                </Pressable>
            </View>
        // </Tab.Navigator>

    );
};
export default Footer;
