import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { useMainContext } from "../context";

function OutlineButton({ loading, onPress, label }) {
  const { theme } = useMainContext();
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        borderColor: theme.secondary || theme.white,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: theme.secondary || theme.white,
          fontFamily: "Montserrat-Bold",
          fontSize: 16,
        }}
      >
        {loading ? (
          <ActivityIndicator color={theme.secondary || theme.white} />
        ) : (
          label
        )}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 1,
  },
});
export default OutlineButton;
