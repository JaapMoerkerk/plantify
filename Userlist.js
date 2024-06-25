// UserList.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import firebaseApp from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, push, child } from "firebase/database";
import ContainerBlue from "./src/components/containerBlue/containerBlue.js";
import ContentContainer from "./src/components/contentContainer/contentContainer.js";
import Footer from "./src/components/footer/footer.js";

const db = getDatabase(firebaseApp);

const UserList = ({ navigation }) => {
  const [messagedUsers, setMessagedUsers] = useState([]);
  const [notMessagedUsers, setNotMessagedUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const user = getAuth().currentUser;
      setCurrentUser(user);

      if (!user) {
        setLoading(false);
        return;
      }

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
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = async (selectedUser) => {
    if (!currentUser) {
      console.error("Current user is null");
      return;
    }

    if (selectedUser.uid === currentUser.uid) {
      console.warn("You can't message yourself");
      return;
    }

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

        // Update lists only when a new chat is created
        setMessagedUsers((prevMessagedUsers) => [
          ...prevMessagedUsers,
          selectedUser,
        ]);
        setNotMessagedUsers((prevNotMessagedUsers) =>
          prevNotMessagedUsers.filter((user) => user.uid !== selectedUser.uid)
        );
      }

      navigation.navigate("ChatScreen", { chatId });
    } catch (error) {
      console.error(error);
    }
  };

  const renderUser = (user) => (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() => handleSelectUser(user)}
    >
      <Image
        source={{ uri: user.avatarUrl || 'https://via.placeholder.com/150' }}
        style={styles.avatar}
      />
      <Text style={styles.username}>{user.username}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messaged Users</Text>
      <FlatList
        data={messagedUsers}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => renderUser(item)}
        ListEmptyComponent={<Text>No messaged users found.</Text>}
      />
      <Text style={styles.header}>Not Messaged Users</Text>
      <FlatList
        data={notMessagedUsers}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => renderUser(item)}
        ListEmptyComponent={<Text>No users found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default UserList;
