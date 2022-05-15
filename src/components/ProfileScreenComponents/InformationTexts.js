import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const InformationTexts = () => {
  const [firstName, setfirstName] = useState("Paulo");
  const [secondName, setSecondName] = useState("Emil");
  const [userName, setUserName] = useState("Buglower");
  const [conversationCounter, setConversationCounter] = useState(0);
  const [planType, setPlanType] = useState("Regular");
  return (
    <View style={styles.container}>
      <Text style={styles.names}>
        {firstName} {secondName}
      </Text>
      <Text>@{userName}</Text>
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
