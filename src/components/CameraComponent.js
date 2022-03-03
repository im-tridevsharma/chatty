import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import Loader from "./Loader";
import ImagePreview from "./ImagePreview";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useMainContext } from "../context";

const CameraComponent = ({ navigation }) => {
  const { theme, scheme } = useMainContext();
  const [preview, setPreview] = React.useState("");
  const [cameraView, setCameraView] = React.useState(true);
  const [flashMode, setFlashMode] = React.useState("off");

  const takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true, mirrorImage: true };
    const data = await camera.takePictureAsync(options);
    setPreview(data.uri);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      {!preview ? (
        <RNCamera
          style={styles.preview}
          type={
            cameraView
              ? RNCamera.Constants.Type.back
              : RNCamera.Constants.Type.front
          }
          flashMode={
            flashMode
              ? RNCamera.Constants.FlashMode.on
              : RNCamera.Constants.FlashMode.off
          }
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== "READY") return <Loader />;
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  onPress={() => takePicture(camera)}
                  style={styles.capture}
                >
                  <View
                    style={{ ...styles.click, backgroundColor: theme.gray }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setCameraView(!cameraView)}
                  style={styles.flip}
                >
                  <MaterialIcons name="flip-camera-android" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFlashMode(!flashMode)}
                  style={styles.flash}
                >
                  {flashMode ? (
                    <Ionicons name="ios-flash-outline" size={25} />
                  ) : (
                    <Ionicons name="ios-flash-off-outline" size={25} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Gallery")}
                  style={styles.gallery}
                >
                  <Ionicons name="md-images-outline" size={25} />
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      ) : (
        <ImagePreview source={preview} setPreview={setPreview} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    backgroundColor: "#fff",
    borderRadius: 30,
    alignSelf: "center",
    width: 60,
    height: 60,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  flip: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  flash: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  gallery: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    bottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  click: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default CameraComponent;
