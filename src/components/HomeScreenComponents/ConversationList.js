import React from "react";

import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";

import ConversationItem from "./ConversationItem";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedConversations } from "../../redux/conversationsActions";

const ConversationList = ({ navigation }) => {
  const { conversations } = useSelector((state) => state.conversationsReducer);
  const dispatch = useDispatch();
  const handleSelect = (id) => {
    dispatch(setSelectedConversations(id));
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        style={styles.list}
        data={conversations}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Conversation", {
                name: item.name,
                id: item.id,
                category: item.category,
              });
              handleSelect(item.id);
            }}
          >
            <ConversationItem
              id={item.id}
              category={item.category}
              name={item.name}
              lastMessage={item.lastMessage}
              date={item.date}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "85%",
  },
});
export default ConversationList;
