import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = ({ navigation, name, category }) => {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    if (category === "Arts & Entertainments")
      setImagePath(require("../../assets/artsEnter.png"));
    else if (category === "Food")
      setImagePath(require("../../assets/foodanddrinks.png"));
    else if (category === "Sports")
      setImagePath(require("../../assets/sports.png"));
    else if (category === "Traviling")
      setImagePath(require("../../assets/travel.png"));
  }, [category]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.pop(1)}
      >
        <Icon name="arrow-back" size={30} color="#3a3b42" />
        <Image style={styles.image} source={imagePath} />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "15%",
    backgroundColor: "#f3f4f7",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    paddingTop: 30,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 15,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: "gold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3a3b42",
    width: "70%",
  },
});
export default Header;
