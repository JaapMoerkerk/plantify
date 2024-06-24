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
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, push, child } from "firebase/database";
import ContainerBlue from "./src/components/containerBlue/containerBlue.js";
import ContentContainer from "./src/components/contentContainer/contentContainer.js";
import Footer from "./src/components/footer/footer.js";

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
    };

    fetchUsers();
  }, []);

  const handleSelectUser = async (selectedUser) => {
    if (currentUser) {
      let chatId = null;
      await get(child(ref(db), "/Chats"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const chats = snapshot.val() || {};

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
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      if (!chatId) {
        const newChatId = push(child(ref(db), "/Chats")).key;
        set(ref(db, "/Chats/" + newChatId), {
          participants: {
            [currentUser.uid]: true,
            [selectedUser.uid]: true,
          },
          messages: {},
        });
        chatId = newChatId;
      }
      navigation.navigate("ChatScreen", { chatId });
    }
  };

  return (
    <ContainerBlue>
      <ContentContainer>
        <View style={styles.container}>
          <FlatList
            data={users.filter((user) => user.uid !== currentUser?.uid)}
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
      </ContentContainer>
      <Footer navigation={navigation} />
    </ContainerBlue>
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
});

export default UserList;
