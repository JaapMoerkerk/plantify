import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './containerGreenStyle'


const ContainerGreen = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default ContainerGreen;