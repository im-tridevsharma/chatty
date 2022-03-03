import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import { useMainContext } from "../context";

const ImagePreview = ({ source, setPreview }) => {
  const { theme } = useMainContext();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: source }} style={styles.preview} />
      <View style={{ ...styles.bottomAction, backgroundColor: theme.primary }}>
        <TouchableOpacity style={styles.icon} onPress={() => setPreview("")}>
          <SimpleLineIcons name="close" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.post}>
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
            }}
          >
            Create a Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <SimpleLineIcons name="share-alt" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomAction: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  post: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImagePreview;
