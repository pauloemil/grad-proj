import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = () => {
  const [image, setImage] = React.useState(
    "https://dummyimage.com/400x400/000/fff&text=paulo"
  );
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      <TouchableOpacity onPress={pickImage}>
        <Image source={{ uri: image }} style={styles.image} />
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
