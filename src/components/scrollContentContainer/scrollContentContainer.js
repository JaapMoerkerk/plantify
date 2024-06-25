import React from 'react';
import { View, StyleSheet } from 'react-native';
import contentContainerStyles from './scrollContentContainerStyles'


const scrollContentContainer = ({ children }) => {
    return (
        <View style={contentContainerStyles.container}>
            {children}
        </View>
    );
};
export default scrollContentContainer;