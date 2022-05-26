import React, { useEffect, useState } from "react";

import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import ConversationItem from "./ConversationItem";

import { useSelector, useDispatch } from "react-redux";
import {
  setConversations,
  setSelectedConversations,
} from "../../redux/actions/conversationsActions";
import { getAllConversations } from "../../configs/axiosHelper";
const ConversationList = ({ navigation }) => {
  const { conversations } = useSelector((state) => state.conversationsReducer);
  const dispatch = useDispatch();
  const handleSelect = (id) => {
    dispatch(setSelectedConversations(id));
  };
  const x = (conversations) => {
    dispatch(setConversations(conversations));
  };
  useEffect(() => {
    getAllConversations(x);
  }, []);

  return (
    <View style={styles.container}>
      {conversations.length !== 0 ? (
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
      ) : (
        <View style={styles.miniView}>
          <Text style={styles.miniText}>There is no Conversations</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "85%",
    marginTop: 10,
  },
  miniView: {
    alignItems: "center",
    marginTop: "30%",
  },

  miniText: {
    width: "70%",
    textAlign: "center",
    fontSize: 17,
  },
});
export default ConversationList;
