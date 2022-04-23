import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const FloatingStartingButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => navigation.navigate("CreateConversation")}
    >
      <View style={[styles.container, styles.shadow]}>
        {/* <Text style={styles.addButton}>a</Text> */}
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
    backgroundColor: "purple",
  },
  // addButton: {
  //   margin: 0,
  //   fontSize: 35,
  //   fontWeight: "bold",
  //   color: "white",
  // },
  shadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2,
  },
});
export default FloatingStartingButton;
