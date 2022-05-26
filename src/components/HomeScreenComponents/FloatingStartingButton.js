import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { primaryColor } from "../GlobalStyles";

const FloatingStartingButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => navigation.navigate("CreateConversation")}
    >
      <View style={[styles.container, styles.shadow]}>
        <Icon name="plus" size={30} color="white" />
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
export default FloatingStartingButton;
