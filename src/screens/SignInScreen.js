import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { sendLogin } from "../configs/axiosHelper";
import { primaryColor, secondaryColor } from "../components/GlobalStyles";
import Footer from "../components/SignInScreenComponents/Footer";

const SignInScreen = ({ navigation, route }) => {
  const [usernameEmail, setUsernameEmail] = useState("buglow_10");
  const [password, setPassword] = useState("password");

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.outerCircle}></View>
        <View style={styles.circle}></View>
        <View style={styles.semiContainer}>
          <Text style={styles.mainText}>Hello Again!</Text>
          <Text style={styles.miniText}>
            Wellcome back you've{"\n"}been missed!
          </Text>
          <TextInput
            style={styles.inputText}
            value={usernameEmail}
            onChangeText={setUsernameEmail}
            placeholder="Username / Email"
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
          <TouchableOpacity
            onPress={() =>
              sendLogin(usernameEmail, password, route.params.setIsLogged)
            }
            style={styles.signInButton}
          >
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
  circle: {
    position: "absolute",
    backgroundColor: primaryColor,
    height: "30%",
    width: "100%",
    top: 0,
    borderBottomRightRadius: 200,
  },
  outerCircle: {
    position: "absolute",
    backgroundColor: secondaryColor,
    height: "30%",
    width: "100%",
    top: 10,
    borderBottomRightRadius: 200,
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
    textAlign: "left",
    width: "100%",
  },
  miniText: {
    textAlign: "left",
    fontSize: 20,
    width: "100%",
    marginBottom: 90,
    marginTop: 10,
  },
  recoveryText: {
    textAlign: "right",
    width: "100%",
    marginTop: 12,
    color: secondaryColor,
  },
  signInButton: {
    backgroundColor: primaryColor,
    width: "60%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  signText: {
    color: "white",
    fontSize: 18,
  },
});
export default SignInScreen;
