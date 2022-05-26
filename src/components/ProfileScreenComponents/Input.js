import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { postNewProfileEdit } from "../../configs/axiosHelper";
const Input = ({ value, setter, placeholder, field }) => {
  const [isEditable, setIsEditable] = useState(false);
  const handlePress = () => {
    postNewProfileEdit(field, value, () => setIsEditable(false));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{placeholder}</Text>
      {isEditable ? (
        <View style={styles.wrapper}>
          <TextInput
            value={value}
            onChangeText={setter}
            style={styles.input}
            placeholder={placeholder}
          />
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => handlePress()}>
              <Icon name="check" size={25} color="green" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEditable(false)}>
              <Icon name="close" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={[styles.wrapper, { marginLeft: 10 }]}>
          <Text style={styles.nonEditableText}>{value}</Text>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsEditable(true)}
          >
            <Icon name="edit" size={25} color="gray" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginTop: "1%",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nonEditableText: {
    fontSize: 16,
    flex: 6,
  },
  input: {
    borderBottomWidth: 1,
    height: "auto",
    padding: 10,
    fontSize: 16,
    flex: 8,
    // width: "90%",
  },
  icon: {
    flex: 2,
    // backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "flex-start",
    // flexDirection: "row",
    marginRight: 15,
  },
  iconWrapper: {
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  inputText: {
    marginTop: 20,
    color: "gray",
  },
});
export default Input;
