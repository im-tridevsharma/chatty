import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StoryItem from "../components/StoryItem";

import { useMainContext } from "../context";
import dummy from "../dummy.json";

const StoryScreen = ({ navigation }) => {
  const { scheme, theme } = useMainContext();

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
        numColumns={2}
        data={dummy.users}
        renderItem={({ item }) => (
          <StoryItem
            onPress={() => navigation.navigate("StoryViewer")}
            user={item}
          />
        )}
      />
    </View>
  );
};

export default StoryScreen;
