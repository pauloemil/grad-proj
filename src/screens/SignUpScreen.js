import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import SelectDropdown from "react-native-select-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Footer from "../components/SignInScreenComponents/Footer";
import axios from "../configs/axiosHelper";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("buglow_324");
  const [email, setEmail] = useState("prog.pau2lo@hotmail.com");
  const [password, setPassword] = useState("password");
  const [confirmationPassword, setConfirmationPassword] = useState("password");
  const [firstName, setFirstName] = useState("paulo");
  const [secondName, setSecondName] = useState("emil");
  const [mobileNumber, setMobileNumber] = useState("+201454148331");
  const [address, setAddress] = useState(
    "tur sinai, st. new Kelany, building 5, flat 4"
  );
  const [gender, setGender] = useState(null);

  const genders = ["Male", "Female"];

  const handleChange = (gender) => {
    // dispatch(setCategory(gender));
    console.log(gender);
    setGender(gender);
  };
  const sendRegister = () => {
    if (password !== confirmationPassword) {
      ToastAndroid.showWithGravity(
        "Passwords don't match!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    }
    console.log("\n\n\n\n");
    axios({
      method: "post",
      url: "/register",
      data: {
        username: username,
        first_name: firstName,
        last_name: secondName,
        email: email,
        telephone_no: mobileNumber,
        password: password,
        confirm_password: confirmationPassword,
        gender: gender,
      },
    })
      .then((resp) => {
        ToastAndroid.showWithGravity(
          "Done!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );

        navigation.navigate("SignIn");
      })
      .catch((err) => console.log("ERR", err.request._response));
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.semiContainer}>
          <Text style={styles.mainText}>Join Us!</Text>
          <TextInput
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
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
          <TextInput
            style={styles.inputText}
            value={confirmationPassword}
            onChangeText={setConfirmationPassword}
            placeholder="Confirmation Password"
            secureTextEntry
          />
          <Text style={styles.miniText}>More To Go!</Text>
          <TextInput
            style={styles.inputText}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <TextInput
            style={styles.inputText}
            value={secondName}
            onChangeText={setSecondName}
            placeholder="Second Name"
          />
          <TextInput
            style={styles.inputText}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Mobile Number"
            keyboardType="number-pad"
          />

          <TextInput
            style={styles.inputText}
            value={address}
            onChangeText={setAddress}
            placeholder="Address"
          />
          <View style={{ width: "100%" }}>
            <SelectDropdown
              data={genders}
              defaultButtonText="Gender"
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
              onSelect={(selectedItem) => handleChange(selectedItem)}
              renderDropdownIcon={(isOpened) => {
                return (
                  <Icon
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownIconPosition="right"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              sendRegister();
            }}
            style={styles.signInButton}
          >
            <Text style={styles.signText}>Sign Up</Text>
          </TouchableOpacity>
          <Footer navigation={navigation} />
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
    marginBottom: 20,
  },
  miniText: {
    textAlign: "center",
    fontSize: 24,
    maxWidth: "80%",
    marginBottom: 5,
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
    marginTop: 10,
  },
  signText: {
    color: "white",
    fontSize: 18,
  },
  dropdown4BtnStyle: {
    width: "50%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown4BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#444", textAlign: "left" },
});
export default SignUpScreen;
