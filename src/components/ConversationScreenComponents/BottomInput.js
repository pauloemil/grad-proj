import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  Text,
  Button,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";

import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../redux/actions/conversationsActions";
import {
  sendVoiceFile,
  getTextSuggestion,
  postNewMessage,
} from "../../configs/axiosHelper";
import { Color, primaryColor } from "../GlobalStyles";
const BottomInput = ({ chatId }) => {
  const [inputText, setInputText] = useState("");
  const [pageX, setPageX] = useState(0);
  const [selectionValue, setSelectionValue] = useState({
    start: 0,
    end: 0,
  });
  const { conversations } = useSelector((state) => state.conversationsReducer);

  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const dispatch = useDispatch();
  async function startRecording() {
    ToastAndroid.showWithGravity(
      "Recording!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
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
  }
  async function stopRecording() {
    ToastAndroid.showWithGravity(
      "Done!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });
    const filetype = uri.split(".").pop();
    const filename = uri.split("/").pop();
    const fd = new FormData();
    fd.append("voice", {
      uri,
      type: `audio/${filetype}`,
      name: filename,
    });
    fd.append("chat_id", chatId);
    sendVoiceFile(fd, reciveVoiceText);
    setRecordings(updatedRecordings);
  }
  const reciveVoiceText = (text) => {
    dispatch(addMessage(chatId, text, false));
  };

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
  const delay = 1000;

  var typewatch = (function () {
    var timer = 0;
    return function (callback) {
      clearTimeout(timer);
      timer = setTimeout(callback, delay);
    };
  })();

  const preFunction = () => {
    getTextSuggestion(inputText, setSuggestion);
  };

  const sendMessage = () => {
    postNewMessage(chatId, inputText.trim());
  };
  return (
    <View style={styles.container}>
      <TextInput
        onKeyPress={() => {
          typewatch(preFunction);
        }}
        onTouchStart={(e) => setPageX(e.nativeEvent.pageX)}
        onTouchEnd={(e) => {
          if (e.nativeEvent.pageX > 60 + pageX) {
            setInputText(inputText + suggestion);
            setSuggestion("");
          }
        }}
        onChangeText={(newText) => {
          const editedText = newText.replace(suggestion, "");
          setInputText(editedText);
        }}
        selection={{ start: inputText.length }}
        multiline={true}
        style={styles.textInput}
      >
        <Text>
          <Text>{inputText}</Text>
          <Text style={{ color: "gray" }}>{suggestion}</Text>
        </Text>
      </TextInput>

      {inputText.trim() !== "" ? (
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            if (inputText.trim() !== "") {
              const now = new Date();
              const current = now.getHours() + ":" + now.getMinutes();
              dispatch(addMessage(chatId, inputText.trim(), true, current));
              sendMessage();
            }
            setInputText("");
            setSuggestion("");
          }}
        >
          <Icon name="send" size={25} color={Color} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.sendButton}
          onLongPress={() => startRecording()}
          onPressOut={() => {
            if (recording) {
              stopRecording();
            }
          }}
        >
          <Icon name="mic" size={25} color={Color} />
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
    backgroundColor: "white",
    width: "83%",
    height: "100%",
    borderRadius: 50,
    marginRight: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: primaryColor,
  },
  sendButton: {
    backgroundColor: primaryColor,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BottomInput;
