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
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import OTPScreen from "./src/screens/OTPScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  const isLogged = true;
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogged ? (
            <>
              <Stack.Screen
                name="ForgotPassword"
                options={{ headerShown: false }}
                component={ForgotPasswordScreen}
              />
              <Stack.Screen
                name="OTPScreen"
                options={{ headerShown: false }}
                component={OTPScreen}
              />
              <Stack.Screen
                name="SignIn"
                options={{ headerShown: false }}
                component={SignInScreen}
              />
              <Stack.Screen
                name="SignUp"
                options={{ headerShown: false }}
                component={SignUpScreen}
              />
              <Stack.Screen
                name="ResetPassword"
                options={{ headerShown: false }}
                component={ResetPasswordScreen}
              />
            </>
          ) : (
            <>
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
            </>
          )}
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
