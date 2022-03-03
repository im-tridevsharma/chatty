import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useMainContext } from "../context";

const StoryItem = ({ user, onPress }) => {
  const { theme, scheme } = useMainContext();

  const [color, setColor] = React.useState(theme.secondary || theme.primary);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      onPressIn={() => setColor(theme.primary || theme.gray)}
      onPressOut={() => setColor(theme.secondary || theme.primary)}
      style={styles.container}
    >
      <View
        style={{
          ...styles.innerContainer,
          borderColor: color,
        }}
      >
        <Image
          source={{
            uri: user?.profile_pic,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text
        numberOfLines={1}
        style={{
          ...styles.name,
          color: scheme === "light" ? theme.gray : theme.white,
        }}
      >
        {user?.name}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          ...styles.text,
          color: scheme === "light" ? theme.gray : theme.white,
        }}
      >
        {user?.last_message_time}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    paddingRight: 5,
    marginTop: 10,
  },

  text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "100",
  },
});

export default StoryItem;
