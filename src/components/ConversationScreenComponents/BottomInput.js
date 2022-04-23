import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";

import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../redux/conversationsActions";

const BottomInput = ({ messagesList, setMessagesList }) => {
  const [inputText, setInputText] = useState("");
  const { conversations } = useSelector((state) => state.conversationsReducer);

  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");

  async function startRecording() {
    console.log("started Recording");
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
    console.log("finish Recording");
  }

  async function stopRecording() {
    console.log("stopping!1");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
    console.log("stopping!2");
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Recording {index + 1} - {recordingLine.duration}
          </Text>
          <Button
            style={styles.button}
            onPress={() => recordingLine.sound.replayAsync()}
            title="Play"
          ></Button>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      {/* {console.log(recordings)} */}
      {getRecordingLines()}
      <TextInput
        value={inputText}
        onChangeText={(newText) => setInputText(newText)}
        multiline
        style={styles.textInput}
      />

      {inputText.trim() !== "" ? (
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            if (inputText.trim() !== "")
              setMessagesList([
                ...messagesList,
                {
                  messageText: inputText.trim(),
                  meSend: true,
                },
              ]);
            setInputText("");
          }}
        >
          <Icon name="send" size={20} color="#3a3b42" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.sendButton}
          onLongPress={() => startRecording()}
          onPressOut={() => {
            // console.log(recording);
            if (recording) {
              stopRecording();
              console.log("mawgouda");
            }
            console.log("mawgouda2");
          }}
          onPress={() => {
            console.log("Done!");
          }}
        >
          <Icon name="mic" size={20} color="#3a3b42" />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 5,
  },

  textInput: {
    backgroundColor: "#f3f4f7",
    width: "83%",
    height: "100%",
    borderRadius: 50,
    marginRight: 8,
    padding: 10,
  },
  sendButton: {
    backgroundColor: "#f3f4f7",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BottomInput;
