import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { useMainContext } from "../context";

const OTPInput = ({ onComplete }) => {
  const { theme } = useMainContext();
  const [otp, setOtp] = React.useState({
    d1: null,
    d2: null,
    d3: null,
    d4: null,
  });
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  const handleNext = (value, next, prev, index) => {
    if (value !== "" && value !== null && value !== undefined) {
      setOtp((prev) => ({ ...prev, ["d" + index]: value }));
      if (next !== "final") {
        next.current.focus();
      } else {
        onComplete(`${otp.d1}${otp.d2}${otp.d3}${value}`);
      }
    } else {
      setOtp((prev) => ({ ...prev, ["d" + index]: null }));
      if (prev !== "first") {
        prev.current.focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.white, fontFamily: "Montserrat-Bold" }}>
        We have sent you OTP on your mobile number. Please enter OTP
      </Text>
      <View style={styles.otpContainer}>
        <TextInput
          ref={ref1}
          selectionColor={theme.primary}
          maxLength={1}
          value={otp?.d1}
          style={{
            ...styles.input,
            backgroundColor: theme.secondary || theme.white,
          }}
          onChangeText={(text) => handleNext(text, ref2, "first", 1)}
          keyboardType="numeric"
        />
        <TextInput
          ref={ref2}
          selectionColor={theme.primary}
          value={otp?.d2}
          maxLength={1}
          style={{
            ...styles.input,
            backgroundColor: theme.secondary || theme.white,
          }}
          onChangeText={(text) => handleNext(text, ref3, ref1, 2)}
          keyboardType="numeric"
        />
        <TextInput
          value={otp?.d3}
          ref={ref3}
          selectionColor={theme.primary}
          maxLength={1}
          style={{
            ...styles.input,
            backgroundColor: theme.secondary || theme.white,
          }}
          onChangeText={(text) => handleNext(text, ref4, ref2, 3)}
          keyboardType="numeric"
        />
        <TextInput
          ref={ref4}
          selectionColor={theme.primary}
          value={otp?.d4}
          maxLength={1}
          style={{
            ...styles.input,
            backgroundColor: theme.secondary || theme.white,
          }}
          onChangeText={(text) => handleNext(text, "final", ref3, 4)}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    borderRadius: 3,
    marginHorizontal: 12,
    width: 50,
    height: 50,
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
});

export default OTPInput;
