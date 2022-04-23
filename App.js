import "react-native-gesture-handler";

import HomeScreen from "./src/screens/HomeScreen";
import ConversationScreen from "./src/screens/ConversationScreen";
import CreateConversationScreen from "./src/screens/CreateConversationScreen";

import { enableScreens } from "react-native-screens";
enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Conversation"
            component={ConversationScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="CreateConversation"
            component={CreateConversationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const screens = {
//   Home: {
//     screen: HomeScreen,
//   },
//   Conversation: {
//     screen: ConversationScreen,
//   },
// };

// const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);
