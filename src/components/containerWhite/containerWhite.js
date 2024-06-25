import React from 'react';
import { View } from 'react-native';
import styles from './containerWhiteStyles'


const ContainerWhite = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default ContainerWhite;