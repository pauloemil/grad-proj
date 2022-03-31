import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ConversationScreen from "./src/screens/ConversationScreen";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      {/* <ConversationScreen /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
  },
});
