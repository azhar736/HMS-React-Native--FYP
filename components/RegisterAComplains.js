import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import PrimaryTitle from "./PrimaryTitle";
import  BASE_URL  from "../config/env.config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const RegisterAComplains = () => {
  const [input, setInput] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigation = useNavigation();
  const inputHandler = (e) => {
    console.log(e);
    setInput(e);
  };
  useEffect(() => {
    const getTokenFromLocalStorage = async () => {
      const userData = await AsyncStorage.getItem("userData");
      // console.log("The Data from Local storage=", userData);
      const temp = JSON.parse(userData);
      console.log(temp.User_Id);
      setLoggedInUser(temp.User_Id);
    };
    getTokenFromLocalStorage();
  }, []);

  const complain = async () => {
    try {
      console.log("Function Triggeredddd");
      // console.log(input);
      console.log(BASE_URL);
      console.log("The User id is::", loggedInUser);
      const response = await axios.post(`${BASE_URL}makeComplain`, {
        userId: loggedInUser,
        complainMessage: input,
      });
      console.log("The Response=", response.data);
      const data1 = await response.data;
      console.log(data1);
      if (data1) {
        Alert.alert(
          "Registered",
          "Your Complain has been registered successfully",
          [
            {
              text: "OK",
             onPress:()=>navigation.goBack()
            },
          ]
        );
      }
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <PrimaryTitle title="Register Your Complain" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <TextInput
          style={styles.inputContainer}
          placeholder="Enter Your Complain here.."
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton buttonText="Submit" onTap={complain} />
        </View>
      </View>
    </View>
  );
};

export default RegisterAComplains;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 100,
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: "#defff1",
    borderColor: "#58fcb9",
    height: 200,
    width: 300,
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: 16,
  },
});
