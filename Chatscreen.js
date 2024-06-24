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
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  onValue,
} from "firebase/database";

const db = getDatabase(firebaseApp);

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
      const messagesRef = ref(db, `/Chats/${chatId}/messages`);
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val() || {};
        const formattedMessages = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setMessages(formattedMessages);
      });
    }
  }, [chatId]);

  useEffect(() => {
    const usersRef = ref(db, '/users');
    onValue(usersRef, (snapshot) => {
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

  const renderMessage = ({ item }) => {
    const isCurrentUser = user && item.sender === user.uid;
    return (
      <View
        style={[
          styles.messageContainer,
          isCurrentUser ? styles.currentUserMessage : styles.otherUserMessage,
        ]}
      >
        <Text style={styles.messageSender}>{getUsername(item.sender)}</Text>
        <Text style={styles.messageContent}>{item.content}</Text>
        <Text style={styles.messageTimestamp}>
          {new Date(item.timestamp).toLocaleTimeString()}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={handleSend} color="#7cd3c3"  />
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
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  currentUserMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
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
