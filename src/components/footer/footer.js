import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './footerStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screen components here
import RuilScreen from '../../screens/ruilScreens/ruil/ruil';

const Tab = createBottomTabNavigator();

const Footer = () => {
    return (
        <View style={styles.footerItems}>
            <NavigationContainer>
                <Pressable style={[styles.footerItem, styles.home]}>
                    <Image source={require('../../../assets/img/footer/home.png')} style={styles.footerImg} />
                </Pressable>

                <View style={[styles.footerItem, styles.trade]}>
                    <Tab.Screen
                        name="Ruil"
                        component={RuilScreen}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={
                                        focused
                                            ? require('../../../assets/img/footer/greenhouse.png')//img can be replaced for a "focussed version"
                                            : require('../../../assets/img/footer/greenhouse.png')
                                    }
                                    style={styles.footerImg}
                                />
                            ),
                        }}
                    />
                </View>

                <Pressable style={[styles.footerItem, styles.find]}>
                    <Image source={require('../../../assets/img/footer/creativity.png')} style={styles.footerImg} />
                </Pressable>

                <Pressable style={[styles.footerItem, styles.collection]}>
                    <Image source={require('../../../assets/img/footer/greenhouse.png')} style={styles.footerImg} />
                </Pressable>
            </NavigationContainer>

        </View>
    );
};
export default Footer;
