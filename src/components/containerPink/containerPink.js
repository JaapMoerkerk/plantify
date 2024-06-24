import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './containerPinkStyles'


const ContainerPink = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default ContainerPink;