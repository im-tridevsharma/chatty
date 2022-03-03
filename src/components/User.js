import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import style from "../config/style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useMainContext } from "../context";

const User = ({ user, onPress }) => {
  const { theme, scheme } = useMainContext();
  const [color, setColor] = React.useState(
    scheme === "light" ? theme.white : theme.gray
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      onPressIn={() =>
        setColor(scheme === "light" ? theme.snow : theme.primary)
      }
      onPressOut={() => setColor(scheme === "light" ? theme.white : theme.gray)}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: color,
        }}
      >
        <Image
          source={{
            uri: user?.profile_pic,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
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
              style={{
                color: scheme === "light" ? theme.gray : theme.white,
                fontFamily: "Montserrat-Regular",
                fontSize: 12,
              }}
            >
              {user?.last_message_time}
            </Text>
          </View>
          {user?.last_message_type === "image" ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="image" color={theme.dimWhite} />
              <Text
                style={{
                  ...styles.text,
                  color: theme.dimWhite,
                  marginLeft: 3,
                }}
              >
                Photo
              </Text>
            </View>
          ) : user?.last_message_type === "pdf" ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="pdffile1" color={theme.dimWhite} />
              <Text
                style={{
                  ...styles.text,
                  color: theme.dimWhite,
                  marginLeft: 3,
                }}
              >
                Pdf
              </Text>
            </View>
          ) : (
            <Text
              style={{
                ...styles.text,
                color: theme.dimWhite,
              }}
              numberOfLines={1}
            >
              {user?.last_message}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingVertical: 5,
    paddingHorizontal: style.padding,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    paddingLeft: style.padding,
    flex: 1,
  },
  name: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    paddingRight: 5,
  },
  text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "100",
  },
});

export default User;
