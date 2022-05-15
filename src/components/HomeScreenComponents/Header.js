import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => {
          navigation.navigate("Profile");
        }}
        style={styles.icon}
        name="more-vertical"
        size={30}
        color="black"
      />
      <Text style={styles.title}>Conversations</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3a3b42",
    // marginBottom: 10,
    // flex: 9,
    marginLeft: 20,
    textAlign: "center",
  },

  container: {
    marginLeft: 10,
    height: "15%",
    backgroundColor: "#f3f4f7",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    paddingTop: 20,
  },
});
export default Header;
