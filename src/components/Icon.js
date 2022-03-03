import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMainContext } from "../context";

const Icon = ({ onPress, name, size }) => {
  const { theme } = useMainContext();
  return (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 8 }}>
      <Ionicons
        name={name}
        size={size || 24}
        color={theme.secondary || theme.white}
      />
    </TouchableOpacity>
  );
};

export default Icon;
