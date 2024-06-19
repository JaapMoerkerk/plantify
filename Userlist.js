// UserList.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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

const UserList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const user = getAuth().currentUser;
      setCurrentUser(user);

      get(child(ref(db), `users`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val() || {};
            const userList = Object.keys(data).map((key) => ({
              uid: key,
              ...data[key],
            }));
            setUsers(userList);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      return () => usersRef.off();
    };

    fetchUsers();
  }, []);

  const handleSelectUser = async (selectedUser) => {
    if (currentUser) {
      const chatRef = firebase.database().ref('/Chats');
      const chatsSnapshot = await chatRef.once('value');
      const chats = chatsSnapshot.val() || {};
      let chatId = null;

      for (const key in chats) {
        const chat = chats[key];
        if (chat.participants[currentUser.uid] && chat.participants[selectedUser.uid]) {
          chatId = key;
          break;
        }
      }

      if (!chatId) {
        const newChatRef = chatRef.push();
        chatId = newChatRef.key;
        newChatRef.set({
          participants: {
            [currentUser.uid]: true,
            [selectedUser.uid]: true,
          },
          messages: {},
        });
      }

      navigation.navigate('ChatScreen', { chatId });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users.filter(user => user.uid !== currentUser?.uid)}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userContainer}
            onPress={() => handleSelectUser(item)}
          >
            <Text style={styles.username}>{item.username}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
  },
});

export default UserList;
