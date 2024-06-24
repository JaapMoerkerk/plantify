import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const Test = ({ navigation }) => {

  return (
    <View style={styles.containerMain}>
        <Text> hey, hier komt de ruil kas! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e07a5f'
  },
});

export default Test;
