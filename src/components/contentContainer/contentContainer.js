import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import styles from './contentContainerStyles'


const ContentContainer = ({ children }) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    );
};
export default ContentContainer;