import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FloatingStartingButton = () => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => console.log(123)}
    >
      <View style={[styles.container, styles.shadow]}>
        <Text style={styles.addButton}>a</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touchableContainer: {
    zIndex: 11,
    // flex: 1,
    position: "absolute",
    bottom: 30,
    right: 30,
    padding: 0,
  },
  container: {
    flex: 1,
    padding: 0,
    // alignItems: "center",
    // justifyContent: "center",
    width: 70,
    height: 70,
    // borderRadius: 100,
    backgroundColor: "purple",
  },
  addButton: {
    padding: 0,
    margin: 0,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  shadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2,
  },
});
export default FloatingStartingButton;
