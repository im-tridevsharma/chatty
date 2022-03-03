import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import style from "../config/style";
import PostAction from "./PostAction";
import { useMainContext } from "../context";

const PostItem = ({ post, onPress }) => {
  const { theme, scheme } = useMainContext();

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.innerContainer,
        }}
      >
        <Image
          source={{
            uri: post?.user?.profile_pic,
          }}
          style={{
            ...styles.image,
            borderColor: theme.secondary || theme.primary,
          }}
          resizeMode="cover"
        />
        <Text
          numberOfLines={1}
          style={{
            ...styles.name,
            color: scheme === "light" ? theme.gray : theme.white,
          }}
        >
          {post?.user?.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...styles.text,
            color: scheme === "light" ? theme.gray : theme.white,
          }}
        >
          {post?.post_time}
        </Text>
      </View>
      <Image
        source={{ uri: post?.image }}
        resizeMode="cover"
        style={styles.postImage}
      />
      <Text
        style={{
          ...styles.text2,
          color: scheme === "light" ? theme.gray : theme.white,
        }}
      >
        {post?.text}
      </Text>
      <PostAction />
      <Text
        style={{
          paddingHorizontal: style.padding,
          color: scheme === "light" ? theme.gray : theme.white,
          fontFamily: "Montserrat-Bold",
          marginTop: 5,
        }}
      >
        200 likes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: style.padding,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 3,
  },
  name: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },

  text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "100",
  },
  postImage: {
    marginTop: 15,
    width: "100%",
    minHeight: 250,
  },
  text2: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    fontWeight: "100",
    marginTop: 15,
    paddingHorizontal: style.padding,
  },
});

export default PostItem;
