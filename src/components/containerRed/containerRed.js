import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './containerRedStyles'


const ContainerRed = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default ContainerRed;