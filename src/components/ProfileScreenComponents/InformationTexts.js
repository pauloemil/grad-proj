import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const InformationTexts = () => {
  const [conversationCounter, setConversationCounter] = useState(0);
  const [planType, setPlanType] = useState("Regular");

  let user = useSelector((state) => state.userReducer);
  let { conversations } = useSelector((state) => state.conversationsReducer);
  user = user.state;
  useEffect(() => {
    setConversationCounter(conversations.length);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.names}>
        {user.firstName} {user.secondName}
      </Text>
      <Text>@{user.username}</Text>
      <View style={styles.simpleInfo}>
        <View style={styles.infoWrapper}>
          <Text style={styles.upperText}>{conversationCounter}</Text>
          <Text style={styles.lowerText}>Chat</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.infoWrapper}>
          <Text style={styles.upperText}>{planType}</Text>
          <Text style={styles.lowerText}>Plan</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  names: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  simpleInfo: {
    // backgroundColor: "coral",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-evenly",
  },
  verticalLine: {
    height: 15,
    width: 1.5,
    backgroundColor: "gray",
  },
  infoWrapper: {
    alignItems: "center",
  },
  upperText: {},
  lowerText: {
    fontWeight: "bold",
  },
});
export default InformationTexts;
