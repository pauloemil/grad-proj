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
import { addMessage } from "../../redux/conversationsActions";
import axios from "../../configs/axiosHelper";

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
  const [suggestion, setSuggestion] = useState("-suggestion-");
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
    console.log("stopping!");
    ToastAndroid.showWithGravity(
      "Done!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log(uri);

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
    sendFiles(fd);
    setRecordings(updatedRecordings);
  }
  const sendFiles = async (formData) => {
    axios({
      method: "post",
      url: "/paulo/upload-voice",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((resp) => {
        dispatch(addMessage(chatId, resp.data.text, false));
      })
      .catch((err) => console.log("ERR", err));
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

  return (
    <View style={styles.container}>
      <TextInput
        onTouchStart={(e) => setPageX(e.nativeEvent.pageX)}
        onTouchEnd={(e) => {
          if (e.nativeEvent.pageX > 60 + pageX) {
            console.log(pageX, e.nativeEvent.pageX);
            setInputText(inputText + suggestion);
            setSuggestion("");
          }
        }}
        // onKeyPress={({ nativeEvent }) => {
        //   if (nativeEvent.key === "Backspace") {
        //     setInputText(
        //       inputText.replace(suggestion, "").slice(0, inputText.length - 1)
        //     );
        //   } else {
        //     console.log("char: ", nativeEvent.key);
        //     setInputText(inputText.replace(suggestion, "") + nativeEvent.key);
        //     console.log("inputText: ", inputText);
        //   }
        // }}
        onChangeText={(newText) => {
          console.log("newText: ", newText);
          const editedText = newText.replace(suggestion, "");
          console.log("editedText: ", editedText);
          setInputText(editedText);

          // console.log("inputText:", inputText, "newText: ", newText);
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
              console.log(inputText, " is typed here");
              dispatch(addMessage(chatId, inputText, true));
            }
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
