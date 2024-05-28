import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => {

  return (
    <View style={styles.containerMain}>

      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
