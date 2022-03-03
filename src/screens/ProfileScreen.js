import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useMainContext } from "../context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import style from "../config/style";
import dummy from "../dummy.json";
import PostItem from "../components/PostItem";

const ProfileScreen = ({ navigation }) => {
  const { theme, scheme } = useMainContext();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const scrolling = (event) => {
    if (event.nativeEvent.contentOffset.y > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const renderHeader = () => {
    return (
      <>
        <ImageBackground
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg",
          }}
          style={styles.background}
          resizeMode="cover"
        >
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.vYB5T92_-0Ax-rU3zImGgAHaHa?pid=ImgDet&rs=1",
            }}
            style={{ ...styles.image, borderColor: theme.primary }}
            resizeMode="cover"
          />
        </ImageBackground>

        <View
          style={{ paddingHorizontal: style.padding, flexDirection: "row" }}
        >
          {/**edit or follow button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={{
              ...styles.btn,
              backgroundColor: theme.secondary || theme.primary,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                color: scheme === "light" ? theme.white : theme.gray,
              }}
            >
              Edit Proifle
            </Text>
          </TouchableOpacity>
        </View>

        {/**profile information */}
        <View style={{ padding: style.padding }}>
          <Text
            style={{
              ...styles.name,
              color: scheme === "light" ? theme.gray : theme.white,
            }}
          >
            Tridev Sharma
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              color: theme.dimWhite,
            }}
          >
            @im-tridevsharma
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              color: scheme === "light" ? theme.gray : theme.white,
              marginTop: 5,
            }}
          >
            #karma is everything, 💘💗 to others and your self. we are one.
          </Text>
        </View>

        {/**followers section */}
        <View
          style={{
            paddingHorizontal: style.padding,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              color: scheme === "light" ? theme.gray : theme.white,
              fontSize: 18,
            }}
          >
            200K
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontFamily: "Montserrat-Regular",
              color: scheme === "light" ? theme.gray : theme.white,
            }}
          >
            Followers
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              color: scheme === "light" ? theme.gray : theme.white,
              fontSize: 18,
              marginLeft: 15,
            }}
          >
            2
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              color: scheme === "light" ? theme.gray : theme.white,
              marginLeft: 5,
            }}
          >
            Following
          </Text>
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <View
        style={{
          ...styles.header,
          position: "absolute",
          width: "100%",
          zIndex: 100,
          top: 0,
          backgroundColor: isScrolled
            ? scheme === "light"
              ? theme.white
              : theme.gray
            : "transparent",
        }}
      >
        <TouchableOpacity
          style={styles.btnbg}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color={
              scheme === "light"
                ? isScrolled
                  ? theme.gray
                  : theme.white
                : theme.white
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnbg}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={22}
            color={
              scheme === "light"
                ? isScrolled
                  ? theme.gray
                  : theme.white
                : theme.white
            }
          />
        </TouchableOpacity>
      </View>
      <FlatList
        onScroll={scrolling}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        data={dummy.posts}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 180,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    right: style.padding,
    bottom: -40,
    borderWidth: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: style.padding,
  },
  btnbg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.1)",
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
});

export default ProfileScreen;
