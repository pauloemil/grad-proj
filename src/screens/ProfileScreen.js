import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePickerComponent from "../components/ProfileScreenComponents/ImagePickerComponent";
import InformationTexts from "../components/ProfileScreenComponents/InformationTexts";

const ProfileScreen = () => {
  const [firstName, setfirstName] = useState("Paulo");
  const [secondName, setSecondName] = useState("Emil");
  const [mobileNumber, setMobileNumber] = useState("+201066122321");
  const [address, setAddress] = useState("Tur-Sinai 5 st. new Kelany");
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
});
export default ProfileScreen;
