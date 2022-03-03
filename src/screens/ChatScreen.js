import React from "react";
import { View, FlatList } from "react-native";
import User from "../components/User";
import dummy from "../dummy.json";
import { useMainContext } from "../context";

const ChatScreen = ({ navigation }) => {
  const { scheme, theme } = useMainContext();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
        paddingTop: 5,
      }}
    >
      <FlatList
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        data={dummy.users}
        renderItem={({ item }) => (
          <User onPress={() => navigation.navigate("Chatting")} user={item} />
        )}
      />
    </View>
  );
};

export default ChatScreen;
