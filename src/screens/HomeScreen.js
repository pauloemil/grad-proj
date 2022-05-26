import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import ConversationList from "../components/HomeScreenComponents/ConversationList";
import FloatingStartingButton from "../components/HomeScreenComponents/FloatingStartingButton";
import Header from "../components/HomeScreenComponents/Header";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../configs/axiosHelper";
import { setUser } from "../redux/actions/userActions";
const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const setUserInRedux = (user) => {
    dispatch(setUser(user));
    setLoading(false);
  };

  useEffect(() => {
    getUserInfo(setUserInRedux);
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ConversationList navigation={navigation} style={styles.list} />
      <FloatingStartingButton
        navigation={navigation}
        style={styles.floatingButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
  },
  floatingButton: {},
});
export default HomeScreen;
