import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./app/screens/Profile";
import Home from "./app/screens/Home";
import Likes from "./app/screens/Likes";
import DirectMessage from "./app/screens/DirectMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "DM") {
            iconName = "send-outline";
          } else if (route.name === "Likes") {
            iconName = "cards-heart-outline";
          } else {
            iconName = "account";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={28} color={color} />
          );
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Likes" component={Likes} />
      <Tab.Screen name="DM" component={DirectMessage} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
