import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import PrimaryButton from "./PrimaryButton";
import PrimaryTitle from "./PrimaryTitle";
import axios from "axios";
import { BASE_URL } from "../env.config";
import ConvertToBase64 from "../helpers/ConverToBase64";

const SubmitBills = () => {
  const [loading, setLoading] = useState(false);
  const [uploadUrl, setUploadUrl] = useState("");
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
        // console.log(item.uri);
        // let str1 = item.uri;
        // let str2 = str1.slice(7);
        // console.log(str2);
        // setUrl(item.uri);
        setUploadUrl(item.uri);
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
        // console.log(item.uri);
        // setUrl(item.uri);
      });
    }
  };

  const UploadImage = async () => {
    // console.log(url);
    // let uri = url.uri;
    // console.log(uri);
    try {
      // const file = e.target.files[0];
      // const base64 = await ConvertToBase64(file);
      const formdata = new FormData();
      formdata.append("image", uploadUrl);
      const response = await axios.post(`${BASE_URL}billPaid`, formdata);
      const data1 = response.data;
      console.log("The Uploaded image url", data1);
    } catch (error) {
      console.log("message:", error.message);
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
          <PrimaryButton buttonText="Submit" onTap={UploadImage} />
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
