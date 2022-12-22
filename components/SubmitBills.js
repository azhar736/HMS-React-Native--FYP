import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import PrimaryButton from "./PrimaryButton";
import PrimaryTitle from "./PrimaryTitle";
const SubmitBills = () => {
  const [images, setImages] = useState(null);

  const pickFromGallery = async () => {
    console.log("Button clicked");
    let data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!data.canceled) {
      data.assets.map((item) => {
        console.log(item.uri);
      });
    }
  };
  const pickFromCamera = async () => {
    console.log("Button clicked");
    let data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!data.canceled) {
      data.assets.map((item) => {
        console.log(item.uri);
      });
    }
  };
  return (
    <View style={styles.rootContainer}>
      <PrimaryTitle title="Submit Your Paid Bill Copy here.." />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View style={styles.container}>
          <Pressable onPress={pickFromGallery}>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Upload Picture from Gallery</Text>
              <MaterialCommunityIcons
                name="view-gallery-outline"
                size={24}
                color="black"
              />
            </View>
          </Pressable>
          <Pressable onPress={pickFromCamera}>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Take a Picture..</Text>
              <Entypo name="camera" size={24} color="black" />
            </View>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton buttonText="Submit" />
        </View>
      </View>
    </View>
  );
};

export default SubmitBills;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 100,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  inputContainer: {
    borderWidth: 4,
    borderRadius: 6,
    backgroundColor: "#defff1",
    borderColor: "#58fcb9",
    height: 100,
    width: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 16,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
});
