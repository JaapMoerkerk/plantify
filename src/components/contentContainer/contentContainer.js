import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import contentContainerStyles from './contentContainerStyles'


const ContentContainer = ({ children }) => {
    return (
        <ScrollView style={contentContainerStyles.container}>
            {children}
        </ScrollView>
    );
};
export default ContentContainer;