import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const ConversationItem = ({ id, category, name, lastMessage, date }) => {
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
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <Image style={styles.image} source={imagePath} />
          <View style={styles.leftText}>
            <Text style={styles.nameText}>{name}</Text>
            <Text numberOfLines={1} style={styles.messageText}>
              {lastMessage}
            </Text>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          {/* <View style={styles.notification}>
            <Text style={styles.notificationText}>1</Text>
          </View> */}
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <View style={styles.horiLine}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  messageText: {
    fontSize: 13,
    color: "#5e5e5d",
    maxWidth: Math.round(Dimensions.get("window").width / 1.5),
  },
  leftWrapper: {
    flexDirection: "row",
  },
  dateText: {
    fontSize: 13,
    color: "silver",
  },
  rightWrapper: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  notification: {
    backgroundColor: "blue",
    height: 20,
    width: 20,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationText: {
    color: "white",
  },
  horiLine: {
    width: "95%",
    height: 1,
    backgroundColor: "silver",
  },
});

export default ConversationItem;
