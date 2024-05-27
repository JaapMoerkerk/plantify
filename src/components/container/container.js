import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './container-styles'


const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default Container;