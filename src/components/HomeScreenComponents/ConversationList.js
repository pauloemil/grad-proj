import React from "react";
import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import ConversationItem from "./ConversationItem";

const ConversationList = () => {
  var list = [
    {
      imageUrl: require("../../assets/artsEnter.png"),
      name: "Going to cenima (Start)",
      lastMessage: "Thanks for the help",
      date: "Yesterday",
    },
    {
      imageUrl: require("../../assets/foodanddrinks.png"),
      name: "Ordering burger",
      lastMessage:
        "This is really bad taste and i don't like it, i'll give you 2 stars only",
      date: "28/3/2022",
    },
    {
      imageUrl: require("../../assets/sports.png"),
      name: "Football match",
      lastMessage: "That was very good goal, well played",
      date: "27/3/2022",
    },
    {
      imageUrl: require("../../assets/travel.png"),
      name: "Traviling to Asia",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
    },
    {
      imageUrl: require("../../assets/artsEnter.png"),
      name: "Going to cenima",
      lastMessage: "Thanks for the help",
      date: "Yesterday",
    },
    {
      imageUrl: require("../../assets/foodanddrinks.png"),
      name: "Ordering burger",
      lastMessage:
        "This is really bad taste and i don't like it, i'll give you 2 stars only",
      date: "28/3/2022",
    },
    {
      imageUrl: require("../../assets/sports.png"),
      name: "Football match",
      lastMessage: "That was very good goal, well played",
      date: "27/3/2022",
    },
    {
      imageUrl: require("../../assets/travel.png"),
      name: "Traviling to Asia",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
    },
    {
      imageUrl: require("../../assets/artsEnter.png"),
      name: "Going to cenima",
      lastMessage: "Thanks for the help",
      date: "Yesterday",
    },
    {
      imageUrl: require("../../assets/foodanddrinks.png"),
      name: "Ordering burger",
      lastMessage:
        "This is really bad taste and i don't like it, i'll give you 2 stars only",
      date: "28/3/2022",
    },
    {
      imageUrl: require("../../assets/sports.png"),
      name: "Football match",
      lastMessage: "That was very good goal, well played",
      date: "27/3/2022",
    },
    {
      imageUrl: require("../../assets/travel.png"),
      name: "Traviling to Asia",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
    },
    {
      imageUrl: require("../../assets/travel.png"),
      name: "Traviling to Asia",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
    },
    {
      imageUrl: require("../../assets/artsEnter.png"),
      name: "Going to cenima",
      lastMessage: "Thanks for the help",
      date: "Yesterday",
    },
    {
      imageUrl: require("../../assets/foodanddrinks.png"),
      name: "Ordering burger",
      lastMessage:
        "This is really bad taste and i don't like it, i'll give you 2 stars only",
      date: "28/3/2022",
    },
    {
      imageUrl: require("../../assets/sports.png"),
      name: "Football match",
      lastMessage: "That was very good goal, well played",
      date: "27/3/2022",
    },
    {
      imageUrl: require("../../assets/travel.png"),
      name: "Traviling to Asia",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
    },
    {
      imageUrl: require("../../assets/travel.png"),
      name: "Traviling to Asia",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
    },
    {
      imageUrl: require("../../assets/artsEnter.png"),
      name: "Going to cenima",
      lastMessage: "Thanks for the help",
      date: "Yesterday",
    },
    {
      imageUrl: require("../../assets/foodanddrinks.png"),
      name: "Ordering burger",
      lastMessage:
        "This is really bad taste and i don't like it, i'll give you 2 stars only",
      date: "28/3/2022",
    },
    {
      imageUrl: require("../../assets/sports.png"),
      name: "Football match",
      lastMessage: "That was very good goal, well played",
      date: "27/3/2022",
    },
    {
      imageUrl: require("../../assets/travel.png"),
      name: "Traviling to Asia (Ending)",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        style={styles.list}
        data={list}
        renderItem={({ item }) => (
          <ConversationItem
            imageUrl={item.imageUrl}
            name={item.name}
            lastMessage={item.lastMessage}
            date={item.date}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "80%",
  },
});
export default ConversationList;
