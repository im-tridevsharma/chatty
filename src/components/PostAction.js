import React from "react";
import { TouchableOpacity, View } from "react-native";
import style from "../config/style";
import { SimpleLineIcons, Octicons, Ionicons } from "@expo/vector-icons";
import { useMainContext } from "../context";

const PostAction = () => {
  const { theme, scheme } = useMainContext();
  return (
    <View
      style={{
        paddingHorizontal: style.padding,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <SimpleLineIcons
            name="heart"
            size={25}
            color={scheme === "light" ? theme.gray : theme.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Octicons
            name="comment"
            size={25}
            color={scheme === "light" ? theme.gray : theme.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 20, marginBottom: 8 }}>
          <SimpleLineIcons
            name="share-alt"
            size={22}
            color={scheme === "light" ? theme.gray : theme.white}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginBottom: 8 }}>
        <Ionicons
          name="bookmark-outline"
          size={22}
          color={scheme === "light" ? theme.gray : theme.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostAction;
