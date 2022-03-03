import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import themePallate from "../../config/theme";
import { useColorScheme } from "react-native";
import ChatScreen from "../../screens/ChatScreen";
import StoryScreen from "../../screens/StoryScreen";
import PostScreen from "../../screens/PostScreen";
import CameraScreen from "../../screens/CameraScreen";
import { Ionicons } from "@expo/vector-icons";

const TobTab = () => {
  const scheme = useColorScheme();
  const theme = themePallate[scheme];
  const TopStack = createMaterialTopTabNavigator();
  return (
    <TopStack.Navigator
      screenOptions={{
        swipeEnabled: true,
        tabBarStyle: {
          backgroundColor: theme.primary,
        },
        tabBarInactiveTintColor: scheme === "light" ? theme.gray : theme.white,
        tabBarActiveTintColor: theme.secondary || theme.white,
        tabBarLabelStyle: { fontFamily: "Montserrat-Bold" },
        tabBarIndicatorStyle: {
          backgroundColor: scheme === "light" ? theme.gray : theme.secondary,
        },
        tabBarBounces: false,
      }}
    >
      <TopStack.Screen name="Chats" component={ChatScreen} />
      <TopStack.Screen name="Story" component={StoryScreen} />
      <TopStack.Screen name="Posts" component={PostScreen} />
      <TopStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="camera"
              size={25}
              color={
                focused
                  ? theme.secondary || theme.white
                  : scheme === "light"
                  ? theme.gray
                  : theme.white
              }
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </TopStack.Navigator>
  );
};

export default TobTab;
