import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  FlatList,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import style from "../config/style";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CameraRoll from "@react-native-community/cameraroll";
import ImagePreview from "../components/ImagePreview";
import { useMainContext } from "../context";

const GalleryViewScreen = ({ navigation }) => {
  const { theme, scheme } = useMainContext();
  const [photos, setPhotos] = React.useState([]);
  const [preview, setPreview] = React.useState(false);
  const { width } = Dimensions.get("window");

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === "granted";
  };

  React.useEffect(() => {
    (async function () {
      const res = await hasAndroidPermission();
      if (res) {
        CameraRoll.getPhotos({
          first: 100,
          assetType: "Photos",
        })
          .then((r) => {
            setPhotos(r.edges);
          })
          .catch((err) => console.log(err));
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: scheme === "light" ? theme.white : theme.gray,
      }}
    >
      <View style={{ ...styles.header, backgroundColor: theme.primary }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={theme.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="checkbox-multiple-marked-outline"
            size={22}
            color={theme.white}
          />
        </TouchableOpacity>
      </View>

      {preview && (
        <View style={{ ...StyleSheet.absoluteFill, zIndex: 100 }}>
          <ImagePreview source={preview} setPreview={setPreview} />
        </View>
      )}

      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item) => item.node.modified}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => setPreview(item.node.image.uri)}
            style={{ flex: 1 }}
          >
            <Image
              source={{ uri: item.node.image.uri }}
              style={{ width: width / 3, height: 150 }}
              resizeMode="cover"
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
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
});

export default GalleryViewScreen;
