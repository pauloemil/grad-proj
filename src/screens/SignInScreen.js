import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Footer from "../components/SignInScreenComponents/Footer";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.semiContainer}>
          <Text style={styles.mainText}>Hello Again!</Text>
          <Text style={styles.miniText}>Wellcome back you've been missed!</Text>
          <TextInput
            style={styles.inputText}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
          <TextInput
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <Text
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
            style={styles.recoveryText}
          >
            Recovery Password
          </Text>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signText}>Sign In</Text>
          </TouchableOpacity>
          <Footer isSignIn={true} navigation={navigation} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1eff6",
  },
  semiContainer: {
    alignItems: "center",
    width: "90%",

    marginTop: "20%",
  },
  inputText: {
    backgroundColor: "white",
    width: "100%",

    marginVertical: 5,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
  },
  mainText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  miniText: {
    textAlign: "center",
    fontSize: 28,
    maxWidth: "80%",
    marginBottom: 35,
    marginTop: 10,
  },
  recoveryText: {
    textAlign: "right",
    width: "100%",
    fontWeight: "700",
    // backgroundColor: "gray",
    marginTop: 12,
    color: "#8e919e",
  },
  signInButton: {
    backgroundColor: "#fc6b68",
    width: "100%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  signText: {
    color: "white",
    fontSize: 18,
  },
});
export default SignInScreen;
