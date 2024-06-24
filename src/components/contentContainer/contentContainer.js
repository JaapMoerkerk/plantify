import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './contentContainerStyles'


const ContentContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default ContentContainer;