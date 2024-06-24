import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Footer from "./src/components/footer/footer.js";
import ContentContainer from "./src/components/contentContainer/contentContainer.js";
import Container from "./src/components/containerRed/containerRed.js";

const FeedDetail = ({ route, navigation }) => {
  const { post } = route.params;

  return (
    <Container>
      <ContentContainer>
        <View style={styles.container}>
          <Text style={styles.title}>{post.name}</Text>
          <Image source={{ uri: post.img }} style={styles.image} />
          <Text style={styles.content}>{post.description}</Text>
        </View>
      </ContentContainer>
      <Footer navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
  },
});

export default FeedDetail;
