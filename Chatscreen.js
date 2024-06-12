import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from './firebaseConfig';

const ChatScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await firebase.database().ref('users').once('value');
        const usersData = usersSnapshot.val();
        const usersArray = usersData ? Object.values(usersData) : [];
        setUsers(usersArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Users Available for Chat</Text>
      {users.map(user => (
        <Button
          key={user.userId} // Use userId as the unique key
          title={user.username}
          onPress={() => navigation.navigate('Chat', { userId: user.userId })}
        />
      ))}
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

export default ChatScreen;
