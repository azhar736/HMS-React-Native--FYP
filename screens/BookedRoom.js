import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { BASE_URL } from "@env";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";
const BookedRoom = ({ route, navigation }) => {
  const [noOFSEATS, setNoOFSEATS] = useState(1);
  const [getDataFromLocal, setGetDataFromLocal] = useState("");
  const [roomDetails,setRoomDetails] = useState("");
  useEffect(() => {
    const getTokenFromLocalStorage = async () => {
      const userData = await AsyncStorage.getItem("userData");
      var storageObj = JSON.parse(userData);
      setGetDataFromLocal(JSON.parse(userData));
      // console.log("The Data from Local storage=", storageObj);
    };
    getTokenFromLocalStorage();
    getSingleRoom();
  }, []);
  const getSingleRoom = async () => {
    console.log("URLLLLLL ====",BASE_URL);
    try {
      const singleRoom = await axios.post(`${BASE_URL}singleRoom`, {
        id: route.params.id,
      });
      const response = await singleRoom.data;
      console.log("The Signle Room Data from the API is === :: ", response.data);
      setRoomDetails(response.data)
    } catch (error) {
      console.log(error.message);
    }
  };
  const sendRequest = async () => {
    console.log(`${BASE_URL}bookRoom`);
    const RoomId = route.params.id;
    console.log("Room IDDDDDD===", RoomId);
    const Id=RoomId.toString();
    console.log("The New IDDDDD=====",Id);
    try {
      const response = await axios.post(`${BASE_URL}bookRoom`, {
        bookedByUser: getDataFromLocal.User_Id,
        id: RoomId,
        noOfseats: noOFSEATS,
      });
      const result = await response.data;
      return result;
      // console.log("The Data from the server", result);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handleClick = () => {
    console.log("Button Clicked");
    console.log(route.params.id);
    const result = sendRequest();
    if (result) {
      navigation.navigate("UserDashboard");
    }
  };
  console.log("The Data in the State Variable is:",roomDetails);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        {/*Images */}
        <Image
          source={{
            uri:
              "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics3.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          {/*Title */}
          <Text style={styles.headingText}>{roomDetails.title}</Text>
        </View>
        <View>
          {/*Details */}
          <Text style={styles.text}>
          {roomDetails.description}
          </Text>
        </View>
      </View>
      <View>
        {/* Button */}
        <PrimaryButton buttonText="Booked Now" onTap={handleClick} />
      </View>
    </View>
  );
};

export default BookedRoom;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  image: {
    height: 200,
    width: 320,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginVertical: 32,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    marginTop:8,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    paddingHorizontal: 8,
  },
  formContainer: {
    marginVertical: 20,
  },
  input: {
    textAlign: "center",
    backgroundColor: "#defff1",
    borderWidth: 2,
    width: 100,
    height: 50,
    borderColor: "#58fcb9",
    paddingVertical: 6,
    padding: 8,
    marginVertical: 8,
    borderRadius: 2,
  },
});