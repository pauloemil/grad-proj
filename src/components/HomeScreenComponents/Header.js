import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { primaryColor } from "../GlobalStyles";

const Header = ({ navigation }) => {
  const [image, setImage] = useState(
    "https://dummyimage.com/400x400/000/fff&text=HearMe"
  );
  let user = useSelector((state) => state.userReducer);
  user = user.state;
  useEffect(() => {
    setImage(user.imageLink);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversations</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <View style={[styles.shadow, styles.imageWrapper]}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 12,
    marginLeft: 20,
    textAlign: "center",
  },
  image: {
    resizeMode: "cover",
    borderRadius: 25,
    width: 45,
    height: 45,
  },
  container: {
    height: "14%",
    backgroundColor: primaryColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 20,
  },
  imageWrapper: {
    marginTop: 10,
    marginRight: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
  },
  shadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 12,
    backgroundColor: "#0000",
  },
});
export default Header;
