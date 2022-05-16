import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken } from "./axiosHelper";

export const checkAuth = async (setIsLoading, setIsLogged) => {
  try {
    let refreshToken = await AsyncStorage.getItem("refreshToken");
    refreshToken = JSON.parse(refreshToken);
    if (refreshToken !== null) {
      //   console.log("ref", refreshToken);
      const accessToken = await getAccessToken(refreshToken);
      if (accessToken) {
        // console.log("acc", accessToken);
        setIsLogged(true);
      }
    } else {
      setIsLogged(false);
    }
  } catch (e) {
    setIsLoading(false);
    console.log("ERR1", e.message);
  }
};

export const removeValue = async (keyName) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (e) {
    console.log("Err in removing", keyName, err.message);
  }

  console.log("Done.");
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log("Err in reading keys");
  }

  console.log("keys", keys);
};

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("ERR", e.message);
  }
};
