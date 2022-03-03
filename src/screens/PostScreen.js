import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostItem from "../components/PostItem";
import { useMainContext } from "../context";

import dummy from "../dummy.json";

const PostScreen = () => {
  const { theme, scheme } = useMainContext();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <FlatList
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        data={dummy.posts}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
};

export default PostScreen;
