import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
const Footer = ({ isSignIn, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.horiLine}></View>
      <View style={styles.notRegisteredText}>
        {/* <View style={styles.line}></View> */}
        <Text>Or continue with...</Text>
        {/* <View style={styles.line}></View> */}
      </View>
      <View style={styles.iconButtons}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Icon name="facebook-square" size={38} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Icon name="google" size={38} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.notRegisteredText}>
        {isSignIn ? (
          <Text>
            <Text>Not a member? </Text>
            <Text
              onPress={() => {
                navigation.navigate("SignUp");
              }}
              style={styles.link}
            >
              Sign up now!
            </Text>
          </Text>
        ) : (
          <Text>
            <Text>Already a member? </Text>
            <Text
              onPress={() => {
                navigation.navigate("SignIn");
              }}
              style={styles.link}
            >
              Sign in now!
            </Text>
          </Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },
  horiLine: {
    marginTop: 20,
    backgroundColor: "gray",
    width: "80%",
    height: 0.5,
  },
  iconButtons: {
    // backgroundColor: "gray",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  button: {
    borderWidth: 2.5,
    borderColor: "white",
    borderRadius: 5,
    width: 80,
    height: 50,
    // marginHorizontal: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  notRegisteredText: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
  },
  link: {
    color: "blue",
  },
});
export default Footer;
