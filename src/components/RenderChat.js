import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useMainContext } from "../context";

const RenderChat = ({ message, same }) => {
  const { theme, scheme } = useMainContext();
  const { width } = Dimensions.get("window");

  return (
    <View
      style={{
        marginTop: same ? 8 : 2,
        paddingHorizontal: 5,
        alignItems: message?.from === 1 ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={{
          zIndex: 10,
          backgroundColor:
            message.from === 1
              ? theme.secondary || theme.primary
              : scheme === "light"
              ? theme.gray
              : theme.white,
          maxWidth: "80%",
          padding: message?.message_type === "image" ? 3 : 8,
          borderRadius: 5,
        }}
      >
        {message?.message_type === "image" ? (
          <TouchableWithoutFeedback>
            <Image
              source={{ uri: message?.message }}
              style={{ width: width / 2, height: width / 2 }}
            />
          </TouchableWithoutFeedback>
        ) : (
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontWeight: "normal",
              fontSize: 12,
              color:
                message.from === 1
                  ? scheme === "light"
                    ? theme.white
                    : theme.gray
                  : scheme === "light"
                  ? theme.white
                  : theme.gray,
            }}
          >
            {message?.message}
          </Text>
        )}
      </View>
      {same && (
        <View
          style={{
            zIndex: 1,
            backgroundColor:
              message.from === 1
                ? theme.secondary || theme.primary
                : scheme === "light"
                ? theme.gray
                : theme.white,
            position: "absolute",
            top: 0,
            height: 10,
            width: 10,
            borderTopRightRadius: message.from === 1 ? 5 : 0,
            borderBottomLeftRadius: 5,
            right: message.from === 1 ? 0 : "100%",
          }}
        />
      )}
    </View>
  );
};

export default RenderChat;
