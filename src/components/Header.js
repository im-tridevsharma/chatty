import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "./Icon";
import style from "../config/style";
import { useMainContext } from "../context";

const Header = ({ navigation }) => {
  const { theme } = useMainContext();
  return (
    <View style={styles.header}>
      <Text
        style={{
          ...styles.brand,
          color: theme.secondary || theme.white,
        }}
      >
        Chatty
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="search" size={22} />
        <Icon name="settings" size={22} />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={{
              uri: "https://yt3.ggpht.com/a/AATXAJwyKv9ry-xMI8-551uqsBC7ERWYREV5kEs-lg=s900-c-k-c0xffffffff-no-rj-mo",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brand: {
    fontSize: 30,
    fontFamily: "Confetti Stream",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: style.padding,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default Header;
