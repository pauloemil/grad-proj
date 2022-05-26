import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { SocialIcon } from "react-native-elements";
import { secondaryColor } from "../GlobalStyles";
const Footer = ({ isSignIn, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.horiLine}></View>
      <View style={styles.notRegisteredText}>
        <Text>Or continue with...</Text>
      </View>
      <View style={styles.iconButtons}>
        <TouchableOpacity>
          <SocialIcon type="facebook" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SocialIcon type="google" />
        </TouchableOpacity>
      </View>
      <View style={[styles.notRegisteredText, { marginBottom: 50 }]}>
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
    alignItems: "center",
  },
  horiLine: {
    marginTop: 20,
    backgroundColor: "gray",
    width: "80%",
    height: 0.5,
  },
  iconButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  notRegisteredText: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
  },
  link: {
    color: secondaryColor,
  },
});
export default Footer;
