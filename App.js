import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Screen1 from "./src/screens/onboarding/Screen1";
import Screen2 from "./src/screens/onboarding/Screen2";
import Screen3 from "./src/screens/onboarding/Screen3";
import Login from "./src/screens/auth/Login";
import Colors from "./src/components/Colors";
import Register from "./src/screens/auth/register";
import Forgot from "./src/screens/auth/forgot";
import Forgot1 from "./src/screens/auth/forgot1";
import Activate from "./src/screens/auth/activate";
import Connect from "./src/screens/setup/connect";
import Setup from "./src/screens/setup/setprofile";
import Welcome from "./src/screens/setup/welcome";
import BottomTabNavigator from "./src/components/BottomTabNavigator";
import Editprofile from "./src/screens/main/editprofile";
import Upload1 from "./src/screens/upload/upload1";
import NftDetailsScreen from "./src/screens/nft/nftitem";
import Bid from "./src/screens/nft/bid";
import Bid2 from "./src/screens/nft/bidsfinish";
import Upload2 from "./src/screens/upload/upload2";
import Upload3 from "./src/screens/upload/upload3";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.dark} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="onboarding1"
          component={Screen1}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="onboarding2"
          component={Screen2}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="onboarding3"
          component={Screen3}
          options={{ animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="forgot"
          component={Forgot}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="forgot1"
          component={Forgot1}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="activate"
          component={Activate}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="connect"
          component={Connect}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="setup"
          component={Setup}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Tab"
          component={BottomTabNavigator}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="edit"
          component={Editprofile}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="upload1"
          component={Upload1}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="upload2"
          component={Upload2}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="upload3"
          component={Upload3}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="nftdetails"
          component={NftDetailsScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="bid"
          component={Bid}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="bid2"
          component={Bid2}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
};

export default App;
