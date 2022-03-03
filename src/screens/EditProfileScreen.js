import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useMainContext } from "../context";
import style from "../config/style";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const EditProfileScreen = ({ navigation }) => {
  const { theme, scheme, setStatusBar } = useMainContext();
  React.useEffect(() => {
    setStatusBar(false);

    return () => {
      setStatusBar(true);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <ImageBackground
        source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlayIcon}>
          <TouchableOpacity style={styles.iconCover}>
            <Ionicons
              name="camera"
              size={22}
              color={scheme === "light" ? theme.gray : theme.white}
            />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.image, borderColor: theme.primary }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{
              uri: "https://th.bing.com/th/id/OIP.vYB5T92_-0Ax-rU3zImGgAHaHa?pid=ImgDet&rs=1",
            }}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Camera")}
            style={{ ...styles.iconCover, position: "absolute" }}
          >
            <Ionicons
              name="camera"
              size={22}
              color={scheme === "light" ? theme.gray : theme.white}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 180,
  },
  overlayIcon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCover: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    right: style.padding,
    bottom: -40,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginTop: 5,
  },
  name: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
});

export default EditProfileScreen;
