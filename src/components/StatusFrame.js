import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useMainContext } from "../context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Video from "react-native-video";
import style from "../config/style";
import Loader from "../components/Loader";

const StatusFrame = ({ number, frame, current, setNext, navigation }) => {
  const { scheme, theme } = useMainContext();
  const { width, height } = Dimensions.get("window");
  const eachWith = width / number - 10;

  const [isPaused, setIsPaused] = React.useState(false);
  const [loader, setLoader] = React.useState(true);
  const [time, setTime] = React.useState(0);
  const [length, setLength] = React.useState(30);

  const onProgress = (info) => {
    setTime(info.currentTime);
    setLength(info.playableDuration);
  };

  const prev = () => {
    if (current !== 0) {
      setLoader(true);
      setNext(current - 1);
      setTime(0);
      setLength(0);
    }
  };

  const next = () => {
    if (current < number - 1) {
      setLoader(true);
      setNext(current + 1);
      setTime(0);
      setLength(0);
    }
  };

  const pause = () => {
    setIsPaused(true);
  };

  const resume = () => {
    setIsPaused(false);
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        {Array.from({ length: number }).map((_, index) => (
          <View
            key={index}
            style={{
              ...styles.bar,
              width: eachWith,
              backgroundColor:
                scheme === "light" ? theme.dimWhite : theme.dimWhite,
            }}
          >
            <View
              style={{
                backgroundColor: theme.secondary || theme.primary,
                ...styles.inner,
                width:
                  current === index
                    ? time
                      ? (time / length) * 100 + "%"
                      : 0
                    : index < current
                    ? "100%"
                    : 0,
              }}
            />
          </View>
        ))}
      </View>
      <View style={{ ...styles.header }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={22}
              color={scheme === "light" ? theme.gray : theme.white}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.vYB5T92_-0Ax-rU3zImGgAHaHa?pid=ImgDet&rs=1",
            }}
            style={styles.image}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-Bold",
                color: scheme === "light" ? theme.gray : theme.white,
              }}
            >
              Tridev Sharma
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={25}
            color={scheme === "light" ? theme.gray : theme.white}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Video
          style={{ width: width, height: height - 50 }}
          resizeMode="contain"
          source={{
            uri: frame,
          }}
          onReadyForDisplay={() => setLoader(false)}
          onVideoBuffer={() => setLoader(true)}
          onProgress={onProgress}
          onEnd={next}
          paused={isPaused}
        />

        {loader && (
          <View style={{ ...styles.overlay, justifyContent: "center" }}>
            <Loader transparent={true} />
          </View>
        )}

        {/**overlay */}
        <View style={styles.overlay}>
          <TouchableOpacity
            onPressOut={resume}
            onLongPress={pause}
            onPress={prev}
            style={styles.action}
          />
          <TouchableOpacity
            onPressOut={resume}
            onLongPress={pause}
            onPress={next}
            style={styles.action}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: style.padding,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  bar: {
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    overflow: "hidden",
  },
  inner: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  action: {
    flex: 1,
  },
});

export default StatusFrame;
