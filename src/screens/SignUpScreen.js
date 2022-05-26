import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { sendRegister } from "../configs/axiosHelper";
import { primaryColor, secondaryColor } from "../components/GlobalStyles";
import Footer from "../components/SignInScreenComponents/Footer";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("buglow_324");
  const [email, setEmail] = useState("prog.pau2lo@hotmail.com");
  const [password, setPassword] = useState("password");
  const [confirmationPassword, setConfirmationPassword] = useState("password");
  const [firstName, setFirstName] = useState("paulo");
  const [secondName, setSecondName] = useState("emil");
  const [gender, setGender] = useState(null);
  const [isMore, setIsMore] = useState(false);

  const genders = ["male", "female"];

  const handleChange = (gender) => {
    setGender(gender);
  };
  const sendRegisterFunction = () => {
    if (username.trim() === "") {
      ToastAndroid.showWithGravity(
        "Username is required!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    } else if (email.trim() === "") {
      ToastAndroid.showWithGravity(
        "Email is required!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    } else if (gender === null || gender.trim() === "") {
      ToastAndroid.showWithGravity(
        "Gender is required!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    } else if (password.trim() === "") {
      ToastAndroid.showWithGravity(
        "Password is required!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    } else if (confirmationPassword.trim() === "") {
      ToastAndroid.showWithGravity(
        "Confirmation Password is required!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    } else if (firstName.trim() === "") {
      ToastAndroid.showWithGravity(
        "First Name is required!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    } else if (secondName.trim() === "") {
      ToastAndroid.showWithGravity(
        "Second Name is required!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    } else if (password !== confirmationPassword) {
      ToastAndroid.showWithGravity(
        "Passwords don't match!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    }
    sendRegister(
      {
        username: username,
        first_name: firstName,
        last_name: secondName,
        email: email,
        password: password,
        confirm_password: confirmationPassword,
        gender: gender,
      },
      () => navigation.navigate("SignIn")
    );
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.outerCircle}></View>
        <View style={styles.circle}></View>
        <View style={styles.semiContainer}>
          <Text style={styles.mainText}>Join Us!</Text>
          <View style={styles.nameInputText}>
            <TextInput
              style={[styles.inputText, { width: "49%", marginRight: "2%" }]}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
            <TextInput
              style={[styles.inputText, { width: "49%" }]}
              value={secondName}
              onChangeText={setSecondName}
              placeholder="Second Name"
            />
          </View>
          <TextInput
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <View style={styles.userGender}>
            <TextInput
              style={[styles.inputText, { width: "49%", marginRight: "2%" }]}
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
            />
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

          <TouchableOpacity
            onPress={() => {
              sendRegisterFunction();
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
  circle: {
    position: "absolute",
    backgroundColor: primaryColor,
    height: "17%",
    width: "100%",
    top: 0,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  outerCircle: {
    position: "absolute",
    backgroundColor: secondaryColor,
    height: "17%",
    width: "100%",
    top: 10,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  nameInputText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginBottom: 35,
  },
  miniText: {
    textAlign: "center",
    fontSize: 24,
    maxWidth: "100%",
    marginBottom: 5,
    marginTop: 10,
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
  userGender: {
    flexDirection: "row",
  },
  dropdown4BtnStyle: {
    backgroundColor: "white",
    width: "49%",
    height: 60,
    marginVertical: 5,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
  },
  dropdown4BtnTxtStyle: { color: "#444", textAlign: "center" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#444", textAlign: "left" },
});
export default SignUpScreen;
