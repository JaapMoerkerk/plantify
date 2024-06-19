import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getDatabase,
  getInstance,
  ref,
  set,
  get,
  push,
  child,
  update,
} from "firebase/database";

const db = getDatabase(firebaseApp);

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
    if (otherUser && currentUser) {
      const createOrFetchChat = async () => {
        get(child(ref(db), "/Chats"))
          .then((snapshot) => {
            const chats = snapshot.val() || {};
            let existingChatId = null;

            for (const key in chats) {
              const chat = chats[key];
              if (
                chat.participants[currentUser.uid] &&
                chat.participants[otherUser.uid]
              ) {
                existingChatId = key;
                break;
              }
            }

            if (existingChatId) {
              setChatId(existingChatId);
            } else {
              const newChatId = push(child(ref(db), "/Chats")).key;
              set(ref(db, "/Chats/" + newChatId), {
                participants: {
                  [currentUser.uid]: true,
                  [otherUser.uid]: true,
                },
                messages: {},
              });

              setChatId(newChatId);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };

      createOrFetchChat();
    }
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;
