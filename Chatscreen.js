import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from './firebaseConfig';


/* werkt nog niet*/
const ChatScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [existingChats, setExistingChats] = useState([]);

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

  useEffect(() => {
    const fetchExistingChats = async () => {
      try {
        const currentUser = firebase.auth().currentUser;
        if (!currentUser) return;

        const currentUserUid = currentUser.uid;
        const chatsRef = firebase.database().ref('Chats');
        const chatsSnapshot = await chatsRef.once('value');
        const chats = [];

        chatsSnapshot.forEach((chat) => {
          const participants = Object.keys(chat.val().participants);
          if (participants.includes(currentUserUid)) {
            const otherParticipant = participants.find(id => id !== currentUserUid);
            chats.push({ userId: otherParticipant, chatId: chat.key });
          }
        });

        setExistingChats(chats);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExistingChats();
  }, []);

  const createOrOpenChat = async (userId) => {
    try {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        console.log("User is not authenticated");
        return;
      }
  
      let chatId = null;
      const chatsRef = firebase.database().ref('Chats');
      const chatsSnapshot = await chatsRef.once('value');
  
      chatsSnapshot.forEach((chat) => {
        const participants = chat.val().participants; // Get the participants object
        if (participants[currentUser.uid] && participants[userId]) {
          chatId = chat.key;
          return;
        }
      });
  
      if (chatId) {
        console.log("Existing chat found. Navigating to chatId:", chatId);
        navigation.navigate('Chat', { chatId });
      } else {
        console.log("No existing chat found. Creating new chat");
        const newChatRef = chatsRef.push();
        chatId = newChatRef.key;
        const participants = {
          [currentUser.uid]: true,
          [userId]: true,
        };
        await newChatRef.set({ participants });
        console.log("New chat created. Navigating to chatId:", chatId);
        navigation.navigate('Chat', { chatId });
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Users Available for Chat</Text>
      {users.map(user => (
        <Button
          key={user.userId}
          title={existingChats.some(chat => chat.userId === user.userId) ? `Open Chat with ${user.username}` : `Start Chat with ${user.username}`}
          onPress={() => createOrOpenChat(user.userId)}
          color={existingChats.some(chat => chat.userId === user.userId) ? "green" : "blue"}
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
