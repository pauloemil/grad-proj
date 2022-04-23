import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { useDispatch } from "react-redux";
import { setCategory, setName } from "../../redux/conversationsActions";

const Header = ({ navigation }) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setCategory(""));
    dispatch(setName(""));
    navigation.pop(1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => handlePress()}>
        <Icon name="arrow-back" size={30} color="#3a3b42" />
      </TouchableOpacity>
      <Text style={styles.title}>{"New Conversation"}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "15%",
    backgroundColor: "#f3f4f7",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    paddingTop: 30,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 15,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: "gold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3a3b42",
  },
});
export default Header;
