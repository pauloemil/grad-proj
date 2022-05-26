import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedConversations,
  addNewConversation,
  setName,
} from "../../redux/actions/conversationsActions";
import { postNewConversation } from "../../configs/axiosHelper";
import { primaryColor } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";
const FloatingAcceptingButton = ({ navigation }) => {
  const { name } = useSelector((state) => state.conversationsReducer);
  const dispatch = useDispatch();
  const handlePress = () => {
    postNewConversation(name, "food");
    onConversationDone();
  };
  const onConversationDone = () => {
    const id = uuid.v4();
    dispatch(addNewConversation(id, name, "food"));
    dispatch(setSelectedConversations(id));
    dispatch(setName(""));
    ToastAndroid.showWithGravity(
      "Done!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    navigation.pop(1);
    navigation.navigate("Conversation");
  };
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => {
        if (name.trim() === "") {
          ToastAndroid.showWithGravity(
            "Please enter the title!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        } else {
          handlePress();
        }
      }}
    >
      <View style={[styles.container, styles.shadow]}>
        <Icon name="checkmark-sharp" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touchableContainer: {
    zIndex: 11,
    flex: 1,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  container: {
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: primaryColor,
  },
  shadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 6,
  },
});
export default FloatingAcceptingButton;
