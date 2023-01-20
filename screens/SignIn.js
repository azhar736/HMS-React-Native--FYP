import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryTitle from "../components/PrimaryTitle";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";
import { isValidObj } from "./SignUp";
import { isValidEmail } from "./SignUp";
import { updateError } from "./SignUp";
import {
  BASE_URL,
  ADMIN_USER,
  ADMIN_PASSWORD,
  WORKER_ADMIN_USER,
  WORKER_ADMIN_PASSWORD,
} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";
const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [loader, setLoader] = useState(false);
  const { email, password } = userInfo;
  const navigation = useNavigation();

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const sendRequest = async () => {
    console.log(`${BASE_URL}loginUser`);
    setLoader(true);
    try {
      const response = await axios.post(`${BASE_URL}loginUser`, {
        email,
        password,
      });
      const result = await response.data;
      console.log("The Response from SERVER:", result);
      if (result.success) {
        const Token = result?.authToken;
        const Name = result?.name;
        const Userid = result?.id;
        if (Token) {
          await AsyncStorage.setItem(
            "userData",
            JSON.stringify({
              Auth_Token: Token,
              User_Name: Name,
              User_Id: Userid,
            })
          );
          setLoader(false);
          navigation.navigate("Home", {
            id: Userid,
          });
        }
      } else {
        setErrorValue(result.message);
      }
    } catch (error) {
      console.log("error", error.message);
      setErrorValue(error.message);
    }
  };

  //Validating the Form
  const isValidForm = () => {
    var upperCase = new RegExp("[A-Z]");
    var lowerCase = new RegExp("[a-z]");
    var special = new RegExp("[!@#$%^&*]");
    var num = new RegExp("[0-9]");
    //We Will accept Only if all fields has values
    if (!isValidObj(userInfo))
      return updateError("Required all fields!", setError);
    //Only Valid email is allowed
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    //Password must have 6 or more characters
    if (!password.trim() || password.length < 6)
      return updateError(
        "Invalid password, password must be at leats 6 characters!",
        setError
      );
    if (!upperCase.test(password))
      return updateError(
        "Invalid password, password must be at leats one UPPER Case Character!",
        setError
      );
    if (!lowerCase.test(password))
      return updateError(
        "Invalid password, password must be at leats one Lower Case Character!",
        setError
      );
    if (!special.test(password))
      return updateError(
        "Invalid password, password must contains a special Character!",
        setError
      );
    if (!num.test(password))
      return updateError(
        "Invalid password, password must contain at least special Character!",
        setError
      );
    return true;
  };

  //Form Submission
  const formSubmit = () => {
    if (isValidForm()) {
      //SubmitForm
      console.log("Form is Valid");
      if (email === ADMIN_USER) {
        if (password === ADMIN_PASSWORD) {
          navigation.navigate("Admin");
        } else {
          setErrorValue("Invalid Password, Try Again");
        }
      } else if (email === WORKER_ADMIN_USER) {
        if (password === WORKER_ADMIN_PASSWORD) {
          navigation.navigate("WorkerAdmin");
        } else {
          setErrorValue("Invalid Password, Try Again");
        }
      } else {
        sendRequest();
      }
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.title}>
        <PrimaryTitle title="Login Your Account" />
      </View>
      {error.match("Required all fields!") ? (
        <Text style={{ color: "red", fontSize: 14, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="email-address"
          placeholder="email"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={(value) => handleOnChangeText(value, "email")}
        />
        {error === "Invalid email!" ? (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              textAlign: "left",
            }}
          >
            {error}
          </Text>
        ) : null}
        <TextInput
          keyboardType="default"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => handleOnChangeText(value, "password")}
        />
        {error.match("6 characters") ||
        error.match(" UPPER Case Character") ||
        error.match("Lower Case Character") ||
        error.match("special Character") ||
        error.match("least one number") ||
        error.match("Password don't match") ? (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              textAlign: "left",
            }}
          >
            {error}
          </Text>
        ) : null}
      </View>
      {errorValue && (
        <Text
          style={{
            color: "red",
            fontSize: 12,
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          {errorValue}
        </Text>
      )}
      {loader && <Loader />}
      <View style={styles.buttonContainer}>
        <PrimaryButton buttonText="SignIn" onTap={formSubmit} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>
          Don't have a account?
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={styles.linkText}
          >
            Sign UP
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 16,
    marginVertical: 70,
  },
  title: {
    marginTop: 50,
  },
  formContainer: {
    marginVertical: 50,
  },
  input: {
    backgroundColor: "#defff1",
    borderWidth: 2,
    borderColor: "#58fcb9",
    paddingVertical: 6,
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  textContainer: {
    padding: 8,
    marginTop: 8,
  },
  subText: {
    fontSize: 12,
    fontWeight: "400",
  },
  linkText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
