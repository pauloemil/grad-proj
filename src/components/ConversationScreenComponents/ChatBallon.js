import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatBallon = ({ messageText, meSend }) => {
  return (
    <View
      style={[
        styles.container,
        { borderTopRightRadius: meSend ? 0 : 0 },
        { backgroundColor: meSend ? "green" : "gold" },
        { alignSelf: meSend ? "flex-end" : "flex-start" },
        // meSend ? { backgroundColor: "green" } : { borderTopLeftRadius: "gold" },
      ]}
    >
      <Text style={styles.messageText}>{messageText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    borderRadius: 50,
    maxWidth: "70%",
    marginHorizontal: 10,
  },
  messageText: {
    color: "black",
  },
});
export default ChatBallon;
