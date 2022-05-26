import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import { sendResetPassword } from "../configs/axiosHelper";

const SignInScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { OTP, email } = useSelector((state) => state.resetReducer);
  const navigationHandle = () => {
    navigation.pop();
    navigation.navigate("SignIn");
  };
  const handlePress = () => {
    if (password === confirmPassword) {
      sendResetPassword(OTP, email, password, navigationHandle);
    } else {
      ToastAndroid.showWithGravity(
        "Password doesn't match the confirmation password",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.semiContainer}>
          <Text style={styles.mainText}>Reset Password!</Text>
          <TextInput
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={styles.inputText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => {
              handlePress();
            }}
            style={styles.signInButton}
          >
            <Text style={styles.signText}>Submit</Text>
          </TouchableOpacity>
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
    marginTop: "10%",
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
    marginTop: "20%",
    marginBottom: 40,
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
