import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignInScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
              navigation.navigate("SignIn");
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
