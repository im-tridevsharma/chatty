import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useMainContext } from "../context";

const Loader = ({ transparent }) => {
  const { theme } = useMainContext();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: transparent ? "transparent" : theme.primary,
      }}
    >
      <ActivityIndicator size="large" color={theme.secondary || theme.white} />
    </View>
  );
};

export default Loader;
