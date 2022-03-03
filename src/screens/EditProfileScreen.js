import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useMainContext } from "../context";
import style from "../config/style";
import { Ionicons } from "@expo/vector-icons";
import CameraComponent from "../components/CameraComponent";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../components/Input";
import OutlineButton from "../components/OutlineButton";

const EditProfileScreen = ({ navigation }) => {
  const { theme, scheme } = useMainContext();
  const [openCam, setOpenCam] = React.useState(0);
  const [profilePic, setProfilePic] = React.useState("");
  const [backgroundPic, setBackgroundPic] = React.useState("");
  const [profileData, setProfileData] = React.useState({
    fullname: "",
    about: "#karma is everything, 💘💗 to others and your self. we are one.",
    dob: "15-01-1998",
    emial: "",
    location: "",
  });

  const updateProfileData = (name, value) => {
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <ImageBackground
        source={{
          uri: backgroundPic
            ? backgroundPic
            : "https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.btnbg}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color={theme.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOpenCam(1)}
          style={styles.iconCover}
        >
          <Ionicons name="camera" size={22} color={theme.white} />
        </TouchableOpacity>
        <View style={{ ...styles.image, borderColor: theme.primary }}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: profilePic
                ? profilePic
                : "https://th.bing.com/th/id/OIP.vYB5T92_-0Ax-rU3zImGgAHaHa?pid=ImgDet&rs=1",
            }}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => setOpenCam(2)}
            style={{
              ...styles.iconCover,
              position: "absolute",
              left: -25,
              zIndex: 100,
            }}
          >
            <Ionicons name="camera" size={22} color={theme.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 50 }}
        style={{ flex: 1, padding: style.padding }}
      >
        <Input
          label="Full Name"
          value={profileData?.fullname}
          setValue={(value) => updateProfileData("fullname", value)}
        />
        <Input
          label="About"
          value={profileData?.about}
          setValue={(value) => updateProfileData("about", value)}
          rest={{
            multiline: true,
            numberOfLines: 5,
            scrollEnabled: true,
            textAlignVertical: "top",
          }}
        />
        <Input
          icon={true}
          value={profileData?.dob}
          setValue={(value) => updateProfileData("dob", value)}
          date={true}
          iconName="eye"
          label="Date of Birth"
        />
        <Input
          icon={true}
          value={profileData?.email}
          setValue={(value) => updateProfileData("email", value)}
          iconName="eye"
          label="Email"
        />
        <Input
          icon={true}
          value={profileData?.location}
          setValue={(value) => updateProfileData("location", value)}
          iconName="eye"
          label="Location"
        />

        <View style={{ alignItems: "center" }}>
          <OutlineButton label="Update" />
        </View>
      </ScrollView>

      {openCam !== 0 && (
        <View style={StyleSheet.absoluteFill}>
          <CameraComponent
            navigation={navigation}
            closer={() => setOpenCam(0)}
            close={true}
            uriCallback={openCam === 1 ? setBackgroundPic : setProfilePic}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 180,
    paddingLeft: style.padding,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },

  iconCover: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    right: style.padding,
    bottom: -40,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginTop: 5,
  },
  name: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  btnbg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.1)",
    position: "absolute",
    left: style.padding,
    top: 10,
  },
});

export default EditProfileScreen;
