import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import contentContainerStyles from './scrollContentContainerStyles'


const scrollContentContainer = ({ children }) => {
    return (
        <ScrollView style={contentContainerStyles.container}>
            {children}
        </ScrollView>
    );
};
export default scrollContentContainer;