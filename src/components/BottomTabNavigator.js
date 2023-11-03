import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import Home from "../screens/main/home";
import Search from "../screens/main/search";
import Profile from "../screens/main/profile";
import Colors from "./Colors";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.white,
        tabBarStyle: {
          backgroundColor: Colors.secondary,
          height: height * 0.07,
          width: "100%",
        },
        labelStyle: {
          fontSize: width * 0.03,
        },
        tabStyle: {
          paddingTop: height * 0.001,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={width * 0.08} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={width * 0.08} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={width * 0.08} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
