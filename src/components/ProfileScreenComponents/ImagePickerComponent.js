import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { editProfileImage } from "../../configs/axiosHelper";

const ImagePickerComponent = () => {
  const [image, setImage] = useState(
    "https://dummyimage.com/400x400/000/fff&text=HearMe"
  );
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.ALL,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      const { uri } = result;
      let uriParts = uri.split(".");
      let fileType = uriParts[uriParts.length - 1];

      let formData = new FormData();
      formData.append("image", {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });

      editProfileImage(formData);
    }
  };

  let user = useSelector((state) => state.userReducer);
  useEffect(() => {
    user = user.state;
    setImage(user.imageLink);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image fadeDuration={0} source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});
export default ImagePickerComponent;
