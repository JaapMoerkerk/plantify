import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import firebase from './firebaseConfig';

const Chat = ({ route }) => {
  const { chatId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = firebase.database().ref(`Chats/${chatId}/messages`);
        
        messagesRef.on('value', snapshot => {
          const messagesData = snapshot.val();
          const messagesArray = messagesData ? Object.values(messagesData) : [];
          setMessages(messagesArray);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [chatId]);

  const sendMessage = async () => {
    try {
      const messagesRef = firebase.database().ref(`Chats/${chatId}/messages`);
      
      const newMessageRef = messagesRef.push();
      await newMessageRef.set({
        sender: firebase.auth().currentUser.uid,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        content: newMessage,
      });
      
      setNewMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
});

export default Chat;
