import React from "react";
import { View } from "react-native";
import { useMainContext } from "../context";
import CameraComponent from "../components/CameraComponent";

const CameraScreen = ({ navigation }) => {
  const { theme, scheme } = useMainContext();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <CameraComponent navigation={navigation} />
    </View>
  );
};

export default CameraScreen;
