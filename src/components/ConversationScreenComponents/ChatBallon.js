import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { useSelector } from "react-redux";
import { meSendColor, notMeSendColor } from "../GlobalStyles";

const ChatBallon = ({ messageText, meSend, date }) => {
  let user = useSelector((state) => state.userReducer);
  user = user.state;
  const [isSpeaking, setIsSpeaking] = useState(false);

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  const speak = () => {
    let options = {
      onDone: () => {
        setIsSpeaking(false);
      },
    };
    Speech.speak(messageText, options);
  };
  const stopSpeaking = () => {
    Speech.stop();
  };

  React.useEffect(() => {
    // listAllVoiceOptions();
  });

  return (
    <TouchableOpacity
      onPress={() => {
        if (meSend) {
          if (!isSpeaking) {
            speak();
            setIsSpeaking(true);
          } else {
            stopSpeaking();
            setIsSpeaking(false);
          }
        }
      }}
    >
      <View
        style={[
          styles.container,
          { alignSelf: meSend ? "flex-end" : "flex-start" },
        ]}
      >
        <View
          style={[
            styles.ballon,
            meSend
              ? { borderBottomRightRadius: 0 }
              : { borderBottomLeftRadius: 0 },
            { backgroundColor: meSend ? meSendColor : notMeSendColor },
          ]}
        >
          <Text style={styles.messageText}>{messageText}</Text>
          <Text
            style={[
              styles.dateText,
              { alignSelf: meSend ? "flex-end" : "flex-start" },
              meSend ? { right: 10 } : { left: 10 },
              { bottom: 8 },
            ]}
          >
            {date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    maxWidth: "70%",
    minWidth: "30%",
    marginHorizontal: 10,
    flex: 1,
  },
  ballon: {
    padding: 20,
    borderRadius: 20,
  },
  messageText: {
    color: "black",
    marginBottom: 5,
  },
  dateText: {
    position: "absolute",
    bottom: 2,
    color: "#5b5a5a",
    fontSize: 12,
  },
});
export default ChatBallon;
