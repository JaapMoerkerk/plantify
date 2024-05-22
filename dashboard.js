// dashboard.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is your Dashboard!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;