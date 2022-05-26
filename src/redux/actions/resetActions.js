export const SET_OTP = "SET_OTP";
export const SET_EMAIL = "SET_EMAIL";

export const setOTPAction = (OTP) => (dispatch) => {
  dispatch({
    type: SET_OTP,
    payload: OTP,
  });
};

export const setEmailAction = (email) => (dispatch) => {
  dispatch({
    type: SET_EMAIL,
    payload: email,
  });
};
