import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTitle from "../components/PrimaryTitle";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  // const [credentialsInvalid, setCredentialsInvalid] = useState({
  //   validname: false,
  //   validemail: false,
  //   validpassword: false,
  // });

  const NameHandler = (e) => {
    setName(e);
  };
  const emailHandler = (e) => {
    setMail(e);
  };
  const passwordHandler = (e) => {
    setPassword(e);
  };
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
  const Submit = () => {
    // InputValidation();
    console.log("name:", name);
    console.log("email:", email);
    console.log("password:", password);
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.title}>
        <PrimaryTitle title="Create Your Account" />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="default"
          placeholder="Enter Your FULL Name"
          style={styles.input}
          value={name}
          onChange={NameHandler}
        />
        <TextInput
          keyboardType="email-address"
          placeholder="Enter Your email - address"
          style={styles.input}
          value={email}
          onChange={emailHandler}
        />
        <TextInput
          keyboardType="visible-password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={passwordHandler}
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
