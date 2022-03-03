import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import style from "../config/style";
import dummy from "../dummy.json";
import RenderChat from "./RenderChat";
import { useMainContext } from "../context";

const ChattingList = ({ navigation }) => {
  const { scheme, theme } = useMainContext();
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    setMessages(dummy.messages);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: 10, paddingHorizontal: 3 }}>
        <FlatList
          style={{ flex: 1 }}
          data={messages}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const same =
              index === 0
                ? true
                : messages[index - 1]?.from === messages[index]?.from
                ? false
                : true;
            return <RenderChat message={item} same={same} />;
          }}
        />
      </View>
      <View
        style={{
          ...styles.chatContainer,
          backgroundColor: scheme === "light" ? theme.white : theme.primary,
        }}
      >
        <TouchableOpacity>
          <SimpleLineIcons
            name="emotsmile"
            size={25}
            color={scheme === "light" ? theme.gray : theme.white}
          />
        </TouchableOpacity>
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline={true}
          style={{
            ...styles.input,
            color: scheme === "light" ? theme.gray : theme.white,
            fontFamily: "Montserrat-Regular",
          }}
          placeholder="Send a message..."
          placeholderTextColor={scheme === "light" ? theme.gray : theme.white}
        />

        <TouchableOpacity>
          <MaterialIcons
            name="attach-file"
            size={25}
            color={scheme === "light" ? theme.gray : theme.white}
          />
        </TouchableOpacity>
        {!message && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Camera")}
            style={{ marginHorizontal: 10 }}
          >
            <SimpleLineIcons
              name="camera"
              size={25}
              color={scheme === "light" ? theme.gray : theme.white}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Ionicons
            name="send-outline"
            size={25}
            color={scheme === "light" ? theme.primary : theme.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: style.padding,
    paddingVertical: 15,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default ChattingList;
