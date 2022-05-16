import axios from "axios";
import { ToastAndroid } from "react-native";
import { storeData } from "./asyncStorageHelper";
const instance = axios.create({
  baseURL: "http://192.168.1.8:5000/",
});
export default instance;

export const getAccessToken = async (refreshToken) => {
  instance({
    method: "post",
    url: "/refesh",
    data: { refresh_token: refreshToken },
  })
    .then((resp) => {
      // setIsLogged(true);
      return resp.data;
    })
    .catch((err) => {
      // setIsLogged(false);
      return null;
    });
};

export const sendLogin = (usernameEmail, password, cb) => {
  console.log("\n\n\n\n");
  instance({
    method: "post",
    url: "/login",
    data: {
      username: usernameEmail,
      password: password,
    },
  })
    .then((resp) => {
      ToastAndroid.showWithGravity(
        "Signed Successfully!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      // console.log("sendLogin", resp.data);
      storeData("refreshToken", resp.data.refresh_token);
      storeData("accessToken", resp.data.access_token);
      cb(true);
    })
    .catch((err) => {
      console.log("ERR", err);
      return false;
    });
};
