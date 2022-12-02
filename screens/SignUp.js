import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTitle from "../components/PrimaryTitle";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const NameHandler = (e) => {
    setName(e);
  };
  const emailHandler = (e) => {
    setMail(e);
  };
  const passwordHandler = (e) => {
    setPassword(e);
  };
  const Submit = () => {
    console.log("name:", name);
    console.log("email:", mail);
    console.log("password:", password);
  };
  return (
    <View style={styles.rootContainer}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
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
          value={mail}
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
      <PrimaryButton onTap={Submit} buttonText="Sign UP" />
      <View style={styles.textContainer}>
        <Text style={styles.subText}>
          Already have an account?<Text style={styles.linkText}>Sign in</Text>
        </Text>
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
});
