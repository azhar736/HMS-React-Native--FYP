import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryTitle from "../components/PrimaryTitle";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { BASE_URL } from "../env.config";
import axios from "axios";
import { isValidObj } from "./SignUp";
import { isValidEmail } from "./SignUp";
import { updateError } from "./SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const {
    fullName,
    email,
    password,
    confirmPassword,
    isActive,
    accountType,
  } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const [loginIsTrue, setLoginIsTrue] = useState(false);
  const navigation = useNavigation();
  const sendRequest = async () => {
    console.log(`${BASE_URL}loginUser`);
    try {
      const response = await axios.post(`${BASE_URL}loginUser`, {
        email,
        password,
      });
      const result = await response.data;
      // console.log("The Data from the server", result?.authToken);
      const Token = result?.authToken;
      const Name = result?.name;
      const Userid = result?.id;
      if (Token) {
        setLoginIsTrue(true);
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({
            Auth_Token: Token,
            User_Name: Name,
            User_Id: Userid,
          })
        );
        navigation.navigate("Home", {
          id: Userid,
        });
      }
    } catch (error) {
      console.log("error", error.message);
      setErrorValue(error.message);
    }
  };
  console.log("The State", loginIsTrue);
  // isValidObj()
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
  const formSubmit = () => {
    // console.log(email);
    // console.log(password);
    if (isValidForm()) {
      //SubmitForm
      console.log("Form is Valid");
      if (email === "admin@gmail.com") {
        if (password === "Admin@1.2.3") {
          navigation.navigate("Admin");
        } else {
          setErrorValue("Invalid Password, Try Again");
        }
      } else if (email === "workeradmin@gmail.com") {
        if (password === "Worker@1.2.3") {
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
