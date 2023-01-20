import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTitle from "../components/PrimaryTitle";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../env.config";
import axios from "axios";

const isValidObj = (obj) => {
  //Fist Conver the Objet into array and then check all field are filled
  // return Object.values(obj).every((value) => value?.trim());
  const Data = Object.values(obj);
  let checkArary = Data.every((value) => {
    if (value) {
      return true;
      // console.log("TRUEEE");
    } else {
      return false;
      // console.log("FALSEEE");
    }
  });
  // console.log("THE DATA:", Data);
  // console.log("THE New Data:", checkArary);
  return checkArary;
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 3000);
};

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isActive: true,
    accountType: "STUDENT",
  });

  const [error, setError] = useState("");

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

  // console.log(userInfo);
  // const [name, setName] = useState("");
  // const [isActive, setIsActive] = useState(true);
  // const [accountType, setaccountType] = useState("STUDENT");
  // const [email, setMail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  // const [credentialsInvalid, setCredentialsInvalid] = useState({
  //   validname: false,
  //   validemail: false,
  //   validpassword: false,
  // });

  // const NameHandler = (e) => {
  //   setName(e);
  // };
  // const emailHandler = (e) => {
  //   setMail(e);
  // };
  // const passwordHandler = (e) => {
  //   setPassword(e);
  // };
  // const confirmPasswordHandler = (e) => {
  //   setConfirmPassword(e);
  // };
  // const InputValidation = () => {
  //   const nameIsValid = name.length > 3;
  //   const emailIsValid = email.includes("@");
  //   const passwordIsValid = password.length > 6;
  //   if (!emailIsValid) {
  //     Alert.alert("Invalid input", "Please enter a Valid Name");
  //   } else if (!emailIsValid) {
  //     Alert.alert("Invalid input", "Please enter a Valid Email");
  //   } else if (!passwordIsValid) {
  //     Alert.alert("Invalid input", "Please enter a Valid Password");
  //   }

  //   setCredentialsInvalid({
  //     validname: !nameIsValid,
  //     validemail: !emailIsValid,
  //     validpassword: !passwordIsValid,
  //   });
  // };
  const sendRequest = async () => {
    console.log(`${BASE_URL}addUser`);
    try {
      const response = await axios.post(`${BASE_URL}addUser`, {
        name,
        email,
        password,
        confirmPassword,
        isActive,
        accountType,
      });
      const data1 = await response.data;
      console.log(data1);
      navigation.navigate("Login");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const isValidForm = () => {
    var upperCase = new RegExp("[A-Z]");
    var lowerCase = new RegExp("[a-z]");
    var special = new RegExp("[!@#$%^&*]");
    var num = new RegExp("[0-9]");
    //We Will accept Only if all fields has values
    if (!isValidObj(userInfo))
      return updateError("Required all fields!", setError);
    //If Valid name with 3 or more characters
    if (!fullName.trim() || fullName.length < 3)
      return updateError("Invalid name!", setError);
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
    //Password  and confirm password must be the same
    if (password !== confirmPassword)
      return updateError("Password don't match!", setError);

    return true;
  };

  const Submit = () => {
    // console.log("email", email);
    // console.log("name", name);
    // console.log("password", password);
    // console.log("confirmPassword", confirmPassword);
    // sendRequest();
    if (isValidForm()) {
      //SubmitForm
      console.log(userInfo);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.title}>
        <PrimaryTitle title="Create Your Account" />
      </View>
      {error ? (
        <Text style={{ color: "red", fontSize: 14, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="default"
          placeholder="Enter Your FULL Name"
          style={styles.input}
          value={fullName}
          onChangeText={(value) => handleOnChangeText(value, "fullName")}
        />
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter Your email - address"
          style={styles.input}
          value={email}
          onChangeText={(value) => handleOnChangeText(value, "email")}
        />
        <TextInput
          keyboardType="default"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={(value) => handleOnChangeText(value, "password")}
        />
        <TextInput
          keyboardType="default"
          placeholder="Confirm Password"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.input}
          value={confirmPassword}
          onChangeText={(value) => handleOnChangeText(value, "confirmPassword")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onTap={Submit} buttonText="Sign UP" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>Already have an account?</Text>
        <View style={styles.hightlightedText}>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.linkText}
          >
            Sign in
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
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
  hightlightedText: {
    marginLeft: 4,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
