import { useEffect, useRef } from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import BottomInput from "../components/ConversationScreenComponents/BottomInput";
import ChatBallon from "../components/ConversationScreenComponents/ChatBallon";
import { getAllMessages } from "../configs/axiosHelper";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../redux/actions/conversationsActions";
const ConversationScreen = ({ navigation }) => {
  const { conversations, selectedConversationId } = useSelector(
    (state) => state.conversationsReducer
  );
  var found = conversations.find((e) => e.id === selectedConversationId);
  const dispatch = useDispatch();
  const afterFetchMessages = (messages) => {
    dispatch(setMessages(selectedConversationId, messages));
  };

  useEffect(() => {
    navigation.setOptions({ title: found.name });
    getAllMessages(selectedConversationId, afterFetchMessages);
  }, []);

  let scrollRef = useRef(null);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.topWrapper}>
          <View style={styles.chatBallonsArea}>
            <FlatList
              style={{ flex: 1 }}
              data={[...found.conversation]}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <ChatBallon
                  messageText={item.messageText}
                  meSend={item.meSend}
                  date={item.date}
                />
              )}
              ref={(it) => (scrollRef.current = it)}
              onContentSizeChange={() =>
                scrollRef.current?.scrollToEnd({ animated: false })
              }
            />
          </View>
        </View>
        <View>
          <BottomInput chatId={selectedConversationId} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  chatBallonsArea: {
    width: "100%",
    height: "100%",
  },
  topWrapper: {
    marginBottom: 60,
    justifyContent: "flex-start",
    width: "100%",
  },
});
export default ConversationScreen;
