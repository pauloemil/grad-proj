import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../components/CreateConversationScreenComponents/Header";
import FloatingAcceptingButton from "../components/CreateConversationScreenComponents/FloatingAcceptingButton";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setName } from "../redux/conversationsActions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateConversationScreen = ({ navigation }) => {
  const categories = ["Food", "Sports", "Arts & Entertainments", "Traviling"];

  const { name } = useSelector((state) => state.conversationsReducer);
  const dispatch = useDispatch();

  const handleChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <KeyboardAwareScrollView>
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

          <SelectDropdown
            data={categories}
            defaultButtonText="Choose the Category"
            buttonStyle={styles.dropdown4BtnStyle}
            buttonTextStyle={styles.dropdown4BtnTxtStyle}
            dropdownStyle={styles.dropdown4DropdownStyle}
            rowStyle={styles.dropdown4RowStyle}
            rowTextStyle={styles.dropdown4RowTxtStyle}
            onSelect={(selectedItem) => handleChange(selectedItem)}
            renderDropdownIcon={(isOpened) => {
              return (
                <Icon
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            dropdownIconPosition="right"
          />
        </View>
      </KeyboardAwareScrollView>
      <FloatingAcceptingButton
        navigation={navigation}
        // title={conversationName}
        // category={category}
      />
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
    // backgroundColor: "gold",
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
  },
  dropdown4BtnStyle: {
    width: "70%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown4BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#444", textAlign: "left" },
});
export default CreateConversationScreen;
