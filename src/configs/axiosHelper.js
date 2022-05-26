import axios from "axios";
import { ToastAndroid } from "react-native";
import { storeData, getData, refreshAccessToken } from "./asyncStorageHelper";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://192.168.1.4:5000/",
});
export default instance;

const generateTheAccessToken = async () => {
  const accessToken = await getData("accessToken");
  let decoded = jwt_decode(accessToken);
  if (Date.now() >= decoded.exp * 1000 - 3000) {
    await getAccessToken();
    let token = await getData("accessToken");
    return token;
  } else {
    let token = await getData("accessToken");
    return token;
  }
};

export const getAccessToken = async () => {
  let refreshToken = await getData("refreshToken");
  await instance({
    method: "post",
    url: "/refresh",
    data: { refresh_token: refreshToken },
  })
    .then(async (resp) => {
      await storeData("accessToken", resp.data.access_token);
      return resp.data.access_token;
    })
    .catch((err) => {
      console.log("axiosHelper getaccessetoken", err.response);
      return null;
    });
};

export const getUserInfo = async (cb) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "get",
    url: "/profile",
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((resp) => {
      let data = resp.data;
      let user = {
        username: data.username,
        firstName: data.first_name,
        secondName: data.last_name,
        email: data.email,
        imageLink: data.profile_picture,
        gender: data.gender,
      };

      cb(user);
    })
    .catch((err) => {
      console.log("AxiosHelper getUserInfo", err);
    });
};

export const sendLogin = (usernameEmail, password, cb) => {
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
      storeData("refreshToken", resp.data.refresh_token);
      storeData("accessToken", resp.data.access_token);
      cb(true);
    })
    .catch((err) => {
      ToastAndroid.showWithGravity(
        "Username-Email do not match with password!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return false;
    });
};

export const sendRegister = (body, cb) => {
  instance({
    method: "post",
    url: "/register",
    data: body,
  })
    .then((resp) => {
      ToastAndroid.showWithGravity(
        "Done!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      cb();
    })
    .catch((err) => {
      ToastAndroid.showWithGravity(
        err.response.data.error,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return false;
    });
};

export const sendForgetPassword = (email, cb) => {
  instance({
    method: "post",
    url: "/reset-password",
    data: {
      email: email,
    },
  })
    .then((resp) => {
      ToastAndroid.showWithGravity(
        "Done!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      cb();
    })
    .catch((err) => {
      console.log("ERR", err);
      ToastAndroid.showWithGravity(
        "Something went wrong!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    });
};

export const sendOTP = (OTP, email, cb) => {
  instance({
    method: "post",
    url: "/reset-password/verify-code",
    data: {
      code: OTP,
      email,
    },
  })
    .then((resp) => {
      ToastAndroid.showWithGravity(
        "Done!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      cb();
    })
    .catch((err) => {
      console.log("AxiosHelper sendOTP", err);
      ToastAndroid.showWithGravity(
        "OTP is not valid!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    });
};

export const sendResetPassword = (OTP, email, password, cb) => {
  instance({
    method: "post",
    url: "/reset-password/update-password",
    data: {
      code: OTP,
      email,
      password: password,
    },
  })
    .then((resp) => {
      ToastAndroid.showWithGravity(
        "Done!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      cb();
    })
    .catch((err) => {
      console.log("AxiosHelper sendResetPassword", err.response.data);
      ToastAndroid.showWithGravity(
        err.response.data.error,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    });
};

export const getTextSuggestion = async (text, cb) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "post",
    url: "/paulo/suggestion",
    data: { text: text },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((resp) => {
      cb(resp.data.suggestion);
    })
    .catch((err) => console.log("AxiosHelper getTextSuggestion", err));
};

export const getAllMessages = async (chat_id, cb) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "post",
    url: "/chat/load",
    data: { chat_id },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((resp) => {
      let messages = [];
      resp.data.forEach((message) => {
        messages.push({
          id: message.id,
          messageText: message.message,
          meSend: message.sender,
          date: message.delivered_time,
        });
      });
      cb(messages.reverse());
    })
    .catch((err) => {
      console.log("AxiosHelper getAllMessages", err);
    });
};

export const getAllConversations = async (cb) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "get",
    url: "/home",
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((resp) => {
      let conversations = [];
      resp.data.forEach((conversation) => {
        conversations.push({
          id: conversation.chat_id,
          name: conversation.chat_name,
          date: conversation.delivered_time,
          lastMessage: conversation.message,
          conversation: [],
        });
      });
      cb(conversations);
    })
    .catch((err) => {
      console.log("AxiosHelper getAllConversations", err);
    });
};

export const postNewMessage = async (chat_id, message) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "post",
    url: "/chat/add-message",
    data: { chat_id, message },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((resp) => {})
    .catch((err) => console.log("AxiosHelper postNewMessage", err));
};

export const postNewConversation = async (chat_name, chat_type) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "post",
    url: "/chat/add",
    data: { chat_name, chat_type },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((resp) => {})
    .catch((err) => console.log("AxiosHelper postNewConversation", err));
};

export const postNewProfileEdit = async (field, data, cb) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "post",
    url: "/profile/edit",
    data: { field, data },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((resp) => {
      ToastAndroid.showWithGravity(
        "Done!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      cb();
    })
    .catch((err) =>
      console.log("AxiosHelper postNewProfileEdit", err.response.data.error)
    );
};

export const editProfileImage = async (formData) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "post",
    url: "/profile/upload-image",
    data: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((resp) => {
      ToastAndroid.showWithGravity(
        "Done!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    })
    .catch((err) => console.log("AxiosHelper editProfileImage", err.response));
};

export const sendVoiceFile = async (formData, cb) => {
  const accessToken = await generateTheAccessToken();
  instance({
    method: "post",
    url: "/paulo/upload-voice",
    data: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((resp) => {
      cb(resp.data.text);
    })
    .catch((err) => console.log("AxiosHelper sendVoiceFile", err));
};
