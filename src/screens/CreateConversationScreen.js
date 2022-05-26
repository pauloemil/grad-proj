import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../components/CreateConversationScreenComponents/Header";
import FloatingAcceptingButton from "../components/CreateConversationScreenComponents/FloatingAcceptingButton";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setName } from "../redux/actions/conversationsActions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateConversationScreen = ({ navigation }) => {
  const { name } = useSelector((state) => state.conversationsReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.textinp}
          value={name}
          maxLength={25}
          placeholder="Conversation Title"
          onChangeText={(text) => {
            dispatch(setName(text));
          }}
        />
      </View>
      <FloatingAcceptingButton navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  wrapper: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  textinp: {
    marginTop: "10%",
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
  },
});
export default CreateConversationScreen;
