import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import firebaseApp from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  get,
  push,
  child,
  set,
} from "firebase/database";

const db = getDatabase(firebaseApp);

const UserList = ({ navigation }) => {
  const [messagedUsers, setMessagedUsers] = useState([]);
  const [notMessagedUsers, setNotMessagedUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const user = getAuth().currentUser;
      setCurrentUser(user);

      try {
        const usersSnapshot = await get(child(ref(db), `users`));
        if (usersSnapshot.exists()) {
          const data = usersSnapshot.val() || {};
          const userList = Object.keys(data).map((key) => ({
            uid: key,
            ...data[key],
          }));

          const chatsSnapshot = await get(child(ref(db), `/Chats`));
          if (chatsSnapshot.exists()) {
            const chats = chatsSnapshot.val() || {};
            const userChats = Object.values(chats).filter(
              (chat) => chat.participants && chat.participants[user.uid]
            );

            const messagedUserIds = userChats.reduce((acc, chat) => {
              return {
                ...acc,
                ...chat.participants,
              };
            }, {});

            delete messagedUserIds[user.uid]; // Remove the current user from the list

            const messagedUserList = userList.filter((u) => messagedUserIds[u.uid]);
            const notMessagedUserList = userList.filter((u) => !messagedUserIds[u.uid] && u.uid !== user.uid);

            setMessagedUsers(messagedUserList);
            setNotMessagedUsers(notMessagedUserList);
          } else {
            setNotMessagedUsers(userList.filter(u => u.uid !== user.uid));
          }
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = async (selectedUser) => {
    if (currentUser) {
      let chatId = null;
      try {
        const chatsSnapshot = await get(child(ref(db), "/Chats"));
        if (chatsSnapshot.exists()) {
          const chats = chatsSnapshot.val() || {};
          for (const key in chats) {
            const chat = chats[key];
            if (
              chat.participants[currentUser.uid] &&
              chat.participants[selectedUser.uid]
            ) {
              chatId = key;
              break;
            }
          }
        }

        if (!chatId) {
          const newChatId = push(child(ref(db), "/Chats")).key;
          await set(ref(db, "/Chats/" + newChatId), {
            participants: {
              [currentUser.uid]: true,
              [selectedUser.uid]: true,
            },
            messages: {},
          });
          chatId = newChatId;
        }

        // Update lists
        setMessagedUsers((prevMessagedUsers) => [
          ...prevMessagedUsers,
          selectedUser,
        ]);
        setNotMessagedUsers((prevNotMessagedUsers) =>
          prevNotMessagedUsers.filter((user) => user.uid !== selectedUser.uid)
        );

        navigation.navigate("ChatScreen", { chatId });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderUser = (user) => (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() => handleSelectUser(user)}
    >
      <Text style={styles.username}>{user.username}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Not Messaged Users</Text>
      <FlatList
        data={notMessagedUsers}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => renderUser(item)}
      />
      <Text style={styles.header}>Messaged Users</Text>
      <FlatList
        data={messagedUsers}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => renderUser(item)}
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
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default UserList;
