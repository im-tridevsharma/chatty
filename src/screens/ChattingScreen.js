import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import style from "../config/style";
import ChattingList from "../components/ChattingList";
import { useMainContext } from "../context";

const ChattingScreen = ({ navigation }) => {
  const { theme, scheme } = useMainContext();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <View style={{ ...styles.header, backgroundColor: theme.primary }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={22}
              color={scheme === "light" ? theme.gray : theme.white}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.vYB5T92_-0Ax-rU3zImGgAHaHa?pid=ImgDet&rs=1",
            }}
            style={styles.image}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-Bold",
                color: scheme === "light" ? theme.gray : theme.white,
              }}
            >
              Tridev Sharma
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Montserrat-Regular",
                color: scheme === "light" ? theme.gray : theme.white,
              }}
            >
              online
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Ionicons
              name="ios-videocam-outline"
              size={25}
              color={scheme === "light" ? theme.gray : theme.white}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <SimpleLineIcons
              name="call-out"
              size={20}
              color={scheme === "light" ? theme.gray : theme.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ChattingList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: style.padding,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default ChattingScreen;
