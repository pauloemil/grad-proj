import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePickerComponent from "../components/ProfileScreenComponents/ImagePickerComponent";
import InformationTexts from "../components/ProfileScreenComponents/InformationTexts";
import Icon from "react-native-vector-icons/Entypo";

import { removeValue } from "../configs/asyncStorageHelper";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../configs/axiosHelper";
import { setUser } from "../redux/actions/userActions";
import Input from "../components/ProfileScreenComponents/Input";
import { primaryColor, Color } from "../components/GlobalStyles";

const ProfileScreen = ({ route }) => {
  const [firstName, setfirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [username, setUsername] = useState();
  const [loading, setLoading] = useState(true);

  const handlePress = () => {
    removeValue("accessToken");
    removeValue("refreshToken");
    route.params.setIsLogged(false);
  };

  let user = useSelector((state) => state.userReducer);
  user = user.state;

  const dispatch = useDispatch();
  const setUserInRedux = (user) => {
    dispatch(setUser(user));
    setfirstName(user.firstName);
    setSecondName(user.secondName);
    setUsername(user.username);
  };
  useEffect(() => {
    setLoading(false);
    getUserInfo(setUserInRedux);
    setfirstName(user.firstName);
    setSecondName(user.secondName);
    setUsername(user.username);
  }, []);

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator color={"blue"} />
    </View>
  ) : (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <ImagePickerComponent />
        <InformationTexts />
        <View style={styles.wrapper}>
          <Input
            value={username}
            setter={setUsername}
            placeholder="Username"
            field="username"
            editable={false}
          />
          <Input
            value={firstName}
            setter={setfirstName}
            placeholder="First Name"
            field="first_name"
          />
          <Input
            value={secondName}
            setter={setSecondName}
            placeholder="Second Name"
            field="last_name"
          />
          {/* <Input
            value={address}
            setter={setAddress}
            placeholder="Address"
            field="address"
          /> */}
        </View>
        <TouchableOpacity onPress={() => handlePress()}>
          <View style={styles.logoutButton}>
            <Icon name="log-out" size={24} color={Color} />
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
    marginTop: "10%",
  },
  wrapper: {
    width: "100%",
    marginLeft: 20,
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
    backgroundColor: primaryColor,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 70,
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 2,
  },
});
export default ProfileScreen;
