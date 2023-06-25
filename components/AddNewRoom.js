import { StyleSheet, Text, TextInput, View,Pressable } from "react-native";
import PrimaryTitle from "./PrimaryTitle";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import BASE_URL  from "../config/env.config";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
const AddNewRoom = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [totalSeates, setTotalSeates] = useState("");
  const [seatsRemaining, setSeatRemaining] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [imageURL,setImageURL]=useState("");
  const navigation = useNavigation();

  const seatHandler = (e) => {
    setTotalSeates(e);
    setSeatRemaining(e);
  };

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
        console.log("The Item is",item.uri);
        setImageURL(item?.uri)
      });
    }
  };
  const bookRoom = async () => {
    console.log("The Base URL on Add New Room Page ::",BASE_URL);
  
    let formData = new FormData();
    formData.append('image', {
      uri: imageURL,
      type: 'image/jpeg', // or 'image/png'
      name: 'testPhoto.jpg' // whatever image name you want to give
    });
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('totalSeates', totalSeates);
    formData.append('seatsRemaining', seatsRemaining);
    formData.append('isBooked', isBooked);
  
    try {
      const response = await axios.post(`${BASE_URL}addRoom`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data1 = await response.data;
      console.log("The Data from the server ::", data1);
      if(data1.data){
        console.log("SUccess")
        navigation.goBack("Admin");
        setTitle("")
        setDescription("");
        setPrice("");
        setTotalSeates("")
      }
      else{
        console.log("Failed to")
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
  


  return (
    <View style={styles.rootContainer}>
      <PrimaryTitle title="Add New Room" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Room Title"
          onChangeText={(e) => setTitle(e)}
        />
      </View>
      <View style={styles.descripContainer}>
        <TextInput
          placeholder="Enter Room Description"
          onChangeText={(e) => setDescription(e)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Total No Of Seats"
          onChangeText={seatHandler}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Price here..."
          onChangeText={(e) => setPrice(e)}
        />
      </View>
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
          {/* <Pressable onPress={pickFromCamera}>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Take a Picture..</Text>
              <Entypo name="camera" size={24} color="black" />
            </View>
          </Pressable> */}
        </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton buttonText="Add Room" onTap={bookRoom} />
      </View>
    </View>
  );
};

export default AddNewRoom;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    borderWidth: 2,
    backgroundColor: "#defff1",
    borderColor: "#58fcb9",
    width: 250,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginVertical: 8,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  
  descripContainer: {
    borderWidth: 2,
    backgroundColor: "#defff1",
    borderColor: "#58fcb9",
    width: 250,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 4,
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "80%",
    // height:150,
    width: 250,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 4,
    // marginVertical: 8,
  },
  ImageinputContainer: {
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
  text: {
    fontSize: 12,
    textAlign: "center",
  },
});
