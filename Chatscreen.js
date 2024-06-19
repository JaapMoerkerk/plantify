// ChatScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
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
  onValue,
  off
} from "firebase/database";

const db = getDatabase(firebaseApp);
const auth = getAuth();

const ChatScreen = ({ route }) => {
  const { chatId } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [usersMap, setUsersMap] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };

    getUser();

    if (chatId) {
      const messagesRef = ref(db, `/Chats/${chatId}/messages`)
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val() || {};
        const formattedMessages = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setMessages(formattedMessages);
      });

      // fetchMessages();
      // return () => messagesRef.off();
    }
  }, [chatId]);

  useEffect(() => {
    const usersRef = firebase.database().ref('/users');
    usersRef.on('value', (snapshot) => {
      const data = snapshot.val() || {};
      const usersList = Object.keys(data).map(key => ({
        uid: key,
        ...data[key]
      }));
      const usersMap = {};
      usersList.forEach(user => {
        usersMap[user.uid] = user.username;
      });
      setUsersMap(usersMap);
    });

    return () => usersRef.off();
  }, []);

  const handleSend = () => {
    if (message.length > 0 && user) {
      const newMessageKey = push(
        child(ref(db), `/Chats/${chatId}/messages`)
      ).key;
      set(ref(db, `/Chats/${chatId}/messages/` + newMessageKey), {
        sender: user.uid,
        content: message,
        timestamp: Date.now(),
      });
      setMessage("");
    }
  };

  const getUsername = (uid) => {
    return usersMap[uid] || 'Unknown';
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageSender}>{getUsername(item.sender)}</Text>
            <Text style={styles.messageContent}>{item.content}</Text>
            <Text style={styles.messageTimestamp}>{new Date(item.timestamp).toLocaleTimeString()}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageSender: {
    fontWeight: 'bold',
  },
  messageContent: {
    marginVertical: 5,
  },
  messageTimestamp: {
    fontSize: 10,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
});

export default ChatScreen;
