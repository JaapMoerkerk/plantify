import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const Test1 = ({ navigation }) => {

  return (
    <View style={styles.containerMain}>
        <Text> hey, hier komt de plant verkenner! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ed267'
  },
});

export default Test1;
