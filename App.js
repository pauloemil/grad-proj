import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { Store } from "./src/redux/store";
import { useState } from "react";
import { checkAuth } from "./src/configs/asyncStorageHelper";
import { primaryColor } from "./src/components/GlobalStyles";
import HomeScreen from "./src/screens/HomeScreen";
import ConversationScreen from "./src/screens/ConversationScreen";
import CreateConversationScreen from "./src/screens/CreateConversationScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import OTPScreen from "./src/screens/OTPScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  checkAuth(setIsLogged);
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: primaryColor,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
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
                component={ProfileScreen}
                initialParams={{ setIsLogged: setIsLogged }}
              />
              <Stack.Screen
                name="Conversation"
                component={ConversationScreen}
              />
              <Stack.Screen
                options={{ title: "New Conversation" }}
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
