import React from 'react';
import { View, StyleSheet } from 'react-native';
import contentContainerStyles from './contentContainerStyle'


const ContentContainer = ({ children }) => {
    return (
        <View style={contentContainerStyles.container}>
            {children}
        </View>
    );
};
export default ContentContainer;