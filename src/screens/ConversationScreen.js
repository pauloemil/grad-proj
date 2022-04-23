import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import BottomInput from "../components/ConversationScreenComponents/BottomInput";
import ChatBallon from "../components/ConversationScreenComponents/ChatBallon";
import Header from "../components/ConversationScreenComponents/Header";

import { useSelector } from "react-redux";

const ConversationScreen = ({ navigation }) => {
  const { conversations, selectedConversationId } = useSelector(
    (state) => state.conversationsReducer
  );

  // console.log(conversations, selectedConversationId);
  var found = conversations.find((e) => e.id === selectedConversationId);
  // console.log(found);

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Header
          style={styles.header}
          navigation={navigation}
          category={found.category}
          name={found.name}
        />
        <View style={styles.chatBallonsArea}>
          <FlatList
            style={{ flex: 1 }}
            inverted
            data={[...found.conversation].reverse()}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <ChatBallon
                messageText={item.messageText}
                meSend={item.meSend}
                date={"12:25"}
              />
            )}
          />
        </View>
      </View>
      <View>
        <BottomInput />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  chatBallonsArea: {
    width: "100%",
    height: "85%",

    // backgroundColor: "silver",
  },
  topWrapper: {
    marginBottom: 60,
    justifyContent: "flex-start",
    width: "100%",
  },
});
export default ConversationScreen;
