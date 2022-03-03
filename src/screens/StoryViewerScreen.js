import React from "react";
import { View } from "react-native";
import { useMainContext } from "../context";
import StatusFrame from "../components/StatusFrame";

const StoryViewerScreen = ({ navigation }) => {
  const { scheme, theme } = useMainContext();
  const [index, setIndex] = React.useState(0);
  const [frames, setFrames] = React.useState([
    "https://qqtakatak.mxplay.com/video/200012H8P0/download/1/h264_high_420.mp4",
    "https://qqcdn.mxtakatak.com/video/200021f29w/download/1/h264_high_540.mp4",
    "https://qqcdn.mxtakatak.com/video/200021jeZJ/download/1/h264_high_540.mp4",
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <StatusFrame
        navigation={navigation}
        number={frames.length}
        frame={frames[index]}
        setNext={setIndex}
        current={index}
      />
    </View>
  );
};

export default StoryViewerScreen;
