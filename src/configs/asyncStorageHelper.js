import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken } from "./axiosHelper";

export const checkAuth = async (setIsLogged) => {
  try {
    let refreshToken = await AsyncStorage.getItem("refreshToken");
    refreshToken = JSON.parse(refreshToken);
    if (refreshToken !== null) {
      const accessToken = await getAccessToken(refreshToken);
      if (accessToken) {
        setIsLogged(true);
      }
    } else {
      setIsLogged(false);
    }
  } catch (e) {
    console.log("ASYNCSTORAGE checkAuth", e.message);
  }
};

export const removeValue = async (keyName) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (e) {
    console.log("ASYNCSTORAGE remove value", keyName, err.message);
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log("ASYNCSTORAGE get all keys");
  }

  console.log("keys", keys);
};

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("ASYNCSTORAGE storedata", e.message);
  }
};

export const getData = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    data = JSON.parse(data);
    if (data !== null) {
      return data;
    }
    return "";
  } catch (e) {
    console.log("ASYNCSTORAGE  getData", e.message);
    return "";
  }
};
