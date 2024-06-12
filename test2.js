import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const Test2 = ({ navigation }) => {

  return (
    <View style={styles.containerMain}>
        <Text> hey, hier komt Mijn kas! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7cd3c3'
  },
});

export default Test2;
