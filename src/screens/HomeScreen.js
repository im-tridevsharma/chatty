import React from "react";
import { View, BackHandler } from "react-native";
import Header from "../components/Header";
import TobTab from "../navigation/Tab/TobTab";
import ReactNativeBiometrics from "react-native-biometrics";
import { useMainContext } from "../context";

const HomeScreen = ({ navigation }) => {
  const { theme, scheme } = useMainContext();

  React.useEffect(() => {
    ReactNativeBiometrics.isSensorAvailable().then((resultObject) => {
      const { available, biometryType } = resultObject;

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        console.log("TouchID is supported");
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        console.log("FaceID is supported");
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
        console.log("Biometrics is supported");
        ReactNativeBiometrics.simplePrompt({
          promptMessage: "Confirm fingerprint",
        })
          .then((resultObject) => {
            const { success } = resultObject;

            if (success) {
              console.log("successful biometrics provided");
            } else {
              BackHandler.exitApp();
            }
          })
          .catch(() => {
            console.log("biometrics failed");
          });
      } else {
        console.log("Biometrics not supported");
      }
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.primary }}>
      <Header navigation={navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: scheme === "light" ? theme.white : theme.gray,
          marginTop: 5,
        }}
      >
        <TobTab />
      </View>
    </View>
  );
};

export default HomeScreen;
