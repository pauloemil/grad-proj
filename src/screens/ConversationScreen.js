import { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import ChatBallon from "../components/ConversationScreenComponents/ChatBallon";
import Header from "../components/ConversationScreenComponents/Header";
const ConversationScreen = ({}) => {
  const [inputText, setInputText] = useState("");
  const [messagesList, setMessagesList] = useState([
    { messageText: "this is ", meSend: false },
    {
      messageText: "this is something!this is something!this is something!",
      meSend: true,
    },
    { messageText: "this is something! something! something!", meSend: false },
    {
      messageText:
        "this is something!this is something!this is something!this is something!",
      meSend: true,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Header style={styles.header} />
        <View style={styles.chatBallonsArea}>
          <FlatList
            style={{ flex: 1 }}
            inverted
            data={[...messagesList].reverse()}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <ChatBallon messageText={item.messageText} meSend={item.meSend} />
            )}
          />
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <TextInput
          value={inputText}
          onChangeText={(newText) => setInputText(newText)}
          multiline
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            setMessagesList([
              ...messagesList,
              {
                messageText: inputText,
                meSend: true,
              },
            ]);
            setInputText("");
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  chatBallonsArea: {
    width: "100%",
    height: "90%",

    // backgroundColor: "silver",
  },
  topWrapper: {
    marginBottom: 60,
    justifyContent: "flex-start",
    width: "100%",
  },
  bottomWrapper: {
    height: 50,
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 5,
  },

  textInput: {
    backgroundColor: "gold",
    width: "83%",
    height: "100%",
    borderRadius: 50,
    marginRight: 8,
    padding: 10,
  },
  sendButton: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ConversationScreen;
