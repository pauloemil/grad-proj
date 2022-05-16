import "react-native-gesture-handler";

import HomeScreen from "./src/screens/HomeScreen";
import ConversationScreen from "./src/screens/ConversationScreen";
import CreateConversationScreen from "./src/screens/CreateConversationScreen";

import { enableScreens } from "react-native-screens";
enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider, useSelector } from "react-redux";
import { Store } from "./src/redux/store";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import OTPScreen from "./src/screens/OTPScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignUpInfoScreen from "./src/screens/SignUpInfoScreen";
import { useState, useEffect } from "react";
import LoadingScreen from "./src/screens/LoadingScreen";
import {
  checkAuth,
  getAllKeys,
  removeValue,
} from "./src/configs/asyncStorageHelper";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // getAllKeys();
  checkAuth(setIsLoading, setIsLogged);
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogged ? (
            <>
              <Stack.Screen
                name="SignIn"
                options={{ headerShown: false }}
                component={SignInScreen}
                initialParams={{ setIsLogged: setIsLogged }}
              />
              <Stack.Screen
                name="SignUp"
                options={{ headerShown: false }}
                component={SignUpScreen}
              />
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
                name="Profile"
                // options={{ headerShown: false }}
                component={ProfileScreen}
                initialParams={{ setIsLogged: setIsLogged }}
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
{
  /* <Stack.Screen
            name="Loading"
            options={{ headerShown: false }}
            component={LoadingScreen}
          /> */
}
{
  /* <Stack.Screen
                name="MoreInfo"
                options={{ headerShown: false }}
                component={SignUpInfoScreen}
              /> */
}
<Stack.Screen
  name="Loading"
  options={{ headerShown: false }}
  component={LoadingScreen}
/>;
