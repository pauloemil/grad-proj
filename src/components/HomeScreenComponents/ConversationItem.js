import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const ConversationItem = ({ name, lastMessage, date }) => {
  const [imagePath, setImagePath] = useState(
    require("../../assets/foodanddrinks.png")
  );

  return (
    <View style={[styles.shadow, styles.container]}>
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
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
    backgroundColor: "#0000",
  },
  container: {
    width: "98%",
    marginLeft: "1%",
    height: 60,
    backgroundColor: "white",
    alignItems: "center",

    borderRadius: 15,
    marginBottom: 5,
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
