import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './containerBlueStyle'


const ContainerBlue = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default ContainerBlue;