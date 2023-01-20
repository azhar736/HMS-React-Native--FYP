import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { BASE_URL } from "@env";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";
const BookedRoom = ({ route, navigation }) => {
  const [noOFSEATS, setNoOFSEATS] = useState("");
  const [getDataFromLocal, setGetDataFromLocal] = useState("");
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
    try {
      const singleRoom = await axios.post(`${BASE_URL}singleRoom`, {
        id: route.params.id,
      });
      const response = await singleRoom.data;
      // console.log("the remaining seats are :: ", response?.data.seatsRemaining);
    } catch (error) {
      console.log(error.message);
    }
  };
  const sendRequest = async () => {
    console.log(`${BASE_URL}bookRoom`);
    const RoomId = route.params;
    try {
      const response = await axios.post(`${BASE_URL}bookRoom`, {
        bookedByUser: getDataFromLocal.User_Id,
        id: RoomId.id.toString(),
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
    console.log(route.params);
    const result = sendRequest();
    if (result) {
      navigation.navigate("UserDashboard");
    }
  };
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
          <Text style={styles.headingText}>Title</Text>
        </View>
        <View>
          {/*Details */}
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="default"
          placeholder="Enter no of Seats"
          style={styles.input}
          onChangeText={(e) => setNoOFSEATS(e)}
        />
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
    borderWidth: 2,
    borderColor: "red",
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
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    width: 300,
    borderColor: "blue",
    marginVertical: 32,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
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
