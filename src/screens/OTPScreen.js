import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { sendOTP } from "../configs/axiosHelper";
import { useSelector, useDispatch } from "react-redux";
import { setOTPAction } from "../redux/actions/resetActions";
const OTPScreen = ({ navigation }) => {
  const [OTP, setOTP] = useState("");
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.resetReducer);
  const ForgottenEmail = email;
  const navigationHandle = () => {
    navigation.pop();
    navigation.navigate("ResetPassword");
  };
  const handlePress = () => {
    sendOTP(OTP, email, navigationHandle);
    dispatch(setOTPAction(OTP));
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.semiContainer}>
          <View style={styles.headerTexts}>
            <Text style={styles.mainText}>Enter OTP</Text>
            <Text style={styles.miniText}>
              <Text>A 8-digit code has been sent to </Text>
              <Text style={styles.emailText}>{ForgottenEmail}</Text>
            </Text>
          </View>
          <TextInput
            style={styles.inputText}
            value={OTP}
            onChangeText={setOTP}
            placeholder="OTP"
          />
          <TouchableOpacity
            onPress={() => handlePress()}
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
    fontSize: 40,
    fontWeight: "bold",
    marginTop: "30%",
  },
  miniText: {
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
  emailText: {
    fontWeight: "bold",
  },
});
export default OTPScreen;
