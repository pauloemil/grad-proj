import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { useSelector } from "react-redux";

const ChatBallon = ({ messageText, meSend, date }) => {
  const { gender } = useSelector((state) => state.conversationsReducer);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  const speak = () => {
    let options = {
      voice: gender === "male" ? "ar-xa-x-ard-local" : "ar-xa-x-arc-network",
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
          if (!isSpeaking) speak();
          else stopSpeaking();
          setIsSpeaking(!isSpeaking);
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
              ? { borderBottomLeftRadius: 50 }
              : { borderBottomRightRadius: 50 },
            { backgroundColor: meSend ? "#f8f7fe" : "#f9f9f9" },
          ]}
        >
          <Text style={styles.messageText}>{messageText}</Text>
          <Text
            style={[
              styles.dateText,
              { alignSelf: meSend ? "flex-end" : "flex-start" },
              meSend ? { right: 5 } : { left: 5 },
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
    minWidth: "20%",
    marginHorizontal: 10,
    flex: 1,
  },
  ballon: {
    padding: 20,
    borderRadius: 50,
  },
  messageText: {
    color: "black",
    marginBottom: 3,
  },
  dateText: {
    position: "absolute",
    bottom: 2,
    color: "#5b5a5a",
    fontSize: 12,
  },
});
export default ChatBallon;
