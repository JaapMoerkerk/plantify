import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from './firebaseConfig';

const Chat = ({ navigation, route }) => {
  const { otherUser } = route.params || {};
  const [currentUser, setCurrentUser] = useState(null);
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setCurrentUser(JSON.parse(userData));
      }
    };

    getCurrentUser();
  }, []);

  useEffect(() => {
    const createOrFetchChat = async () => {
      if (otherUser && currentUser) {
        const chatRef = firebase.database().ref('/Chats');
        const chatsSnapshot = await chatRef.once('value');
        const chats = chatsSnapshot.val() || {};
        let existingChatId = null;

        for (const key in chats) {
          const chat = chats[key];
          if (chat.participants[currentUser.uid] && chat.participants[otherUser.uid]) {
            existingChatId = key;
            break;
          }
        }

        if (existingChatId) {
          setChatId(existingChatId);
        } else {
          const newChatRef = chatRef.push();
          const newChatId = newChatRef.key;
          newChatRef.set({
            participants: {
              [currentUser.uid]: true,
              [otherUser.uid]: true,
            },
            messages: {},
          });
          setChatId(newChatId);
        }
      }
    };

    createOrFetchChat();
  }, [otherUser, currentUser]);

  useEffect(() => {
    if (chatId) {
      navigation.replace('ChatScreen', { chatId });
    }
  }, [chatId]);

  return (
    <View style={styles.container}>
      <Text>Loading Chat...</Text>
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

export default Chat;
