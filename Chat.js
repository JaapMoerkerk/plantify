import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const API_URL = 'https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/messages.json';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [editingMessage, setEditingMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data) {
          const messagesArray = Object.entries(data).map(([id, message]) => ({
            id,
            ...message,
          }));
          setMessages(messagesArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (input.trim()) {
      if (editingMessage) {
        handleUpdate(editingMessage.id);
      } else {
        const newMessage = { text: input, createdAt: new Date().toISOString() };
        try {
          await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
          });
          setMessages([...messages, newMessage]);
          setInput('');
        } catch (error) {
          console.error('Error sending message:', error);
        }
      }
    }
  };

  const handleUpdate = async (id) => {
    const updatedMessage = { text: input, createdAt: new Date().toISOString() };
    try {
      await fetch(`https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/messages/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMessage),
      });
      const updatedMessages = messages.map((msg) =>
        msg.id === id ? { ...msg, text: input } : msg
      );
      setMessages(updatedMessages);
      setEditingMessage(null);
      setInput('');
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app/messages/${id}.json`, {
        method: 'DELETE',
      });
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Delete Message',
      'Are you sure you want to delete this message?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => handleDelete(id) },
      ],
      { cancelable: true }
    );
  };

  const handleEdit = (message) => {
    setInput(message.text);
    setEditingMessage(message);
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text>{item.text}</Text>
      <Text style={styles.timestamp}>{new Date(item.createdAt).toLocaleString()}</Text>
      <View style={styles.actionsContainer}>
        <Button title="Edit" onPress={() => handleEdit(item)} />
        <Button title="Delete" onPress={() => confirmDelete(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
        />
        <Button title={editingMessage ? "Update" : "Send"} onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  timestamp: {
    fontSize: 10,
    color: '#999',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 4,
  },
});

export default Chat;
