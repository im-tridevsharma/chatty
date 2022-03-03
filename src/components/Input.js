import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMainContext } from "../context";
import DateTimePicker from "@react-native-community/datetimepicker";

const Input = ({
  icon,
  iconName,
  value,
  setValue,
  label,
  date,
  style,
  rest,
}) => {
  const { theme, scheme } = useMainContext();
  const [datetime] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setValue
      ? setValue(
          new Date(currentDate)
            .toISOString()
            .slice(0, 10)
            .split("-")
            .reverse()
            .join("-")
        )
      : console.log(currentDate);
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", ...style }}>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={datetime}
          mode={showDatePicker}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {date ? (
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          activeOpacity={1}
          style={{
            ...styles.input,
            backgroundColor: scheme === "light" ? theme.snow : theme.primary,
            borderColor: theme.secondary || theme.primary,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              color: scheme === "light" ? theme.gray : theme.white,
              fontFamily: "Montserrat-Regular",
            }}
          >
            {value || label}
          </Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={(text) => (setValue ? setValue(text) : "")}
          {...rest}
          style={{
            ...styles.input,
            backgroundColor: scheme === "light" ? theme.snow : theme.primary,
            borderColor: theme.secondary || theme.primary,
            color: scheme === "light" ? theme.gray : theme.white,
          }}
          placeholderTextColor={scheme === "light" ? theme.gray : theme.white}
        />
      )}
      {icon && (
        <TouchableOpacity style={{ ...styles.iconCover, marginLeft: 10 }}>
          <Ionicons name={iconName} size={22} color={theme.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconCover: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontFamily: "Montserrat-Regular",
    borderLeftWidth: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 5,
    paddingVertical: 10,
    flex: 1,
  },
});

export default Input;
