import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedConversations,
  addNewConversation,
} from "../../redux/conversationsActions";
const FloatingAcceptingButton = ({ navigation }) => {
  // send el conversation to the back end and get her id, then add it to the store
  const { category, name } = useSelector((state) => state.conversationsReducer);
  const dispatch = useDispatch();
  const handlePress = (id) => {
    dispatch(addNewConversation(id, name, category));
    dispatch(setSelectedConversations(id));
  };
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => {
        if (category.trim() !== "" && name.trim() !== "") {
          handlePress(44);
          navigation.pop(1);
          navigation.navigate("Conversation");
        }
      }}
    >
      <View style={[styles.container, styles.shadow]}>
        {/* <Text style={styles.addButton}>a</Text> */}
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
    backgroundColor: "purple",
  },
  shadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2,
  },
});
export default FloatingAcceptingButton;
