import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ConversationList from "../components/HomeScreenComponents/ConversationList";
import FloatingStartingButton from "../components/HomeScreenComponents/FloatingStartingButton";
import Header from "../components/HomeScreenComponents/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ConversationList navigation={navigation} style={styles.list} />
      <FloatingStartingButton
        navigation={navigation}
        style={styles.floatingButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
  },
  floatingButton: {},
});
export default HomeScreen;
