import React from 'react';
import { View, StyleSheet } from 'react-native';
var styles = require(.../container-styles');


const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default Container;