import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  ToastAndroid,
  Keyboard,
} from "react-native";
import React from "react";
import style from "../../config/style";
import OTPInput from "../../components/OTPInput";
import flag from "../../assets/icons/flag.jpg";
import Loader from "../../components/Loader";
import OutlineButton from "../../components/OutlineButton";
import { useMainContext } from "../../context";

const LoginScreen = ({ navigation }) => {
  const { theme } = useMainContext();

  const [number, setNumber] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [isOtp, setIsOtp] = React.useState(false);

  //send otp
  const handleOtp = async () => {
    if (!loading) {
      if (number && number.match(/^\d{10}$/)) {
        setLoading(true);
        setTimeout(() => {
          setIsOtp(true);
          setLoading(false);
        }, 1000);
      } else {
        ToastAndroid.show("Please enter a valid number.", ToastAndroid.SHORT);
      }
    }
  };

  //onOtpInput
  const onOtpInput = (otp) => {
    setLoader(true);
    Keyboard.dismiss();
    setTimeout(() => {
      setLoader(false);
      if (otp === "1111") {
        navigation.navigate("Home");
        ToastAndroid.show("Welcome Back, Tridev", ToastAndroid.LONG);
      } else {
        ToastAndroid.show("OTP Verification failed.", ToastAndroid.LONG);
      }
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={{ ...styles.container, backgroundColor: theme.primary }}>
        <Text
          style={{
            ...styles.brand,
            color: theme.secondary || theme.white,
          }}
        >
          Chatty
        </Text>
        {loader && <Loader />}
        {!isOtp ? (
          <View style={styles.formContainer}>
            <Text style={{ ...styles.inputTitle, color: theme.white }}>
              Start with your mobile number
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme.secondary || theme.white,
                paddingHorizontal: 10,
                borderRadius: 30,
              }}
            >
              <Image
                source={flag}
                style={{ height: 30, width: 30, marginRight: 5 }}
                resizeMode="contain"
              />
              <Text
                style={{ color: theme.gray, fontFamily: "Montserrat-Bold" }}
              >
                +91
              </Text>
              <TextInput
                keyboardType="numeric"
                value={number}
                style={{
                  ...styles.input,
                  backgroundColor: theme.secondary || theme.white,
                }}
                placeholder="9981728192"
                placeholderTextColor={theme.gray}
                maxLength={10}
                selectionColor={theme.primary}
                onChangeText={(text) => setNumber(text)}
              />
            </View>
            <OutlineButton
              loading={loading}
              onPress={handleOtp}
              label="Get OTP"
            />
          </View>
        ) : (
          <View style={styles.formContainer}>
            <OTPInput onComplete={onOtpInput} />
            <OutlineButton loading={loading} label="Resend OTP" />
            <OutlineButton
              loading={loading}
              label="Back"
              onPress={() => setIsOtp(false)}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: style.padding,
  },
  brand: {
    fontSize: 30,
    fontFamily: "Confetti Stream",
  },
  inputTitle: {
    marginBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 60,
    width: "60%",
    textAlign: "center",
    borderRadius: 30,
    paddingHorizontal: style.padding,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
});

export default LoginScreen;
