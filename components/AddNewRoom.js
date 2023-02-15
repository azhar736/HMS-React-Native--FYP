import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryTitle from "./PrimaryTitle";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { BASE_URL } from "@env";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const AddNewRoom = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [totalSeates, setTotalSeates] = useState("");
  const [seatsRemaining, setSeatRemaining] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const navigation = useNavigation();
  const seatHandler = (e) => {
    setTotalSeates(e);
    setSeatRemaining(e);
  };
  const bookRoom = async () => {
    console.log("The Base URL on Add New Room Page ::",BASE_URL);
    try {
      const response = await axios.post(`${BASE_URL}addRoom`, {
        title,
        description,
        price,
        totalSeates,
        seatsRemaining,
        isBooked,
      });
      const data1 = await response.data;
      console.log("The Data from the server ::", data1);
      if(data1.data){
        console.log("SUccess")
        navigation.goBack("Admin");
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
});
