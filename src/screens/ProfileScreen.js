import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePickerComponent from "../components/ProfileScreenComponents/ImagePickerComponent";
import InformationTexts from "../components/ProfileScreenComponents/InformationTexts";
import Icon from "react-native-vector-icons/Entypo";

import { removeValue } from "../configs/asyncStorageHelper";

const ProfileScreen = ({ route }) => {
  const [firstName, setfirstName] = useState("Paulo");
  const [secondName, setSecondName] = useState("Emil");
  const [mobileNumber, setMobileNumber] = useState("+201066122321");
  const [address, setAddress] = useState("Tur-Sinai 5 st. new Kelany");
  const handlePress = () => {
    removeValue("accessToken");
    removeValue("refreshToken");
    route.params.setIsLogged(false);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <ImagePickerComponent />
        <InformationTexts />
        <View style={styles.wrapper}>
          <Text style={styles.inputText}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setfirstName}
            style={styles.input}
            placeholder="First Name"
          />
          <Text style={styles.inputText}>Second Name</Text>
          <TextInput
            value={secondName}
            onChangeText={setSecondName}
            style={styles.input}
            placeholder="Second Name"
          />
          <Text style={styles.inputText}>Mobile Number</Text>
          <TextInput
            value={mobileNumber}
            onChangeText={setMobileNumber}
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="number-pad"
          />
          <Text style={styles.inputText}>Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            style={styles.input}
            placeholder="Address"
          />
        </View>
        <TouchableOpacity onPress={() => handlePress()}>
          <View style={styles.logoutButton}>
            <Icon name="log-out" size={24} color="black" />
            <Text style={styles.buttonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: "10%",
  },
  wrapper: {
    width: "100%",
    marginLeft: 20,
    // alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    height: "auto",
    padding: 10,
    fontSize: 16,
    width: "90%",
  },
  inputText: {
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: "coral",
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ProfileScreen;
