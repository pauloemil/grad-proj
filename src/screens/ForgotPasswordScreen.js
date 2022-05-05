import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.semiContainer}>
          <View style={styles.headerTexts}>
            <Text style={styles.mainText}>Forgot Password!</Text>
            <Text style={styles.miniText}>
              Don't worry! it happens. Please enter the address associated with
              your account.
            </Text>
          </View>
          <TextInput
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("OTPScreen")}
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
  headerTexts: {
    width: "100%",
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
    // alignItems: "flex-start",
    fontSize: 40,
    maxWidth: "80%",
    fontWeight: "bold",
    marginTop: "30%",
  },
  miniText: {
    // textAlign: "center",
    color: "gray",
    fontSize: 18,
    maxWidth: "100%",
    marginBottom: 35,
    marginTop: 10,
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
export default ForgotPasswordScreen;
