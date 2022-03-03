import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/LoginScreen";
import HomeScreen from "../../screens/HomeScreen";
import ChattingScreen from "../../screens/ChattingScreen";
import GalleryViewScreen from "../../screens/GalleryViewScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import StoryViewerScreen from "../../screens/StoryViewerScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Chatting"
        options={{ headerShown: false, animation: "slide_from_left" }}
        component={ChattingScreen}
      />
      <Stack.Screen
        name="Gallery"
        options={{ headerShown: false, animation: "slide_from_bottom" }}
        component={GalleryViewScreen}
      />
      <Stack.Screen
        name="Profile"
        options={{ headerShown: false, animation: "slide_from_right" }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="StoryViewer"
        options={{ headerShown: false, animation: "none" }}
        component={StoryViewerScreen}
      />
      <Stack.Screen
        name="EditProfile"
        options={{ headerShown: false, animation: "none" }}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
