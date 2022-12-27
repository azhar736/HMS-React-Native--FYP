import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryTitle from "../components/PrimaryTitle";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const formSubmit = () => {
    // console.log(email);
    // console.log(password);
    if (email === "admin@gmail.com") {
      navigation.navigate("Admin");
    } else if (email === "workeradmin@gmail.com") {
      navigation.navigate("WorkerAdmin");
    } else if (email == "user@gmail.com") {
      // Alert.alert("UnAuthorized", "Please Register first");
      navigation.navigate("UserDashboard");
    } else {
      Alert.alert("UnAuthorized", "Please Login with correct credentails");
    }
  };
  return (
    <View style={styles.rootContainer}>
      {/* <Ionicons
        onPress={() => navigate.navigate("Signup")}
        name="arrow-back-sharp"
        size={24}
        color="black"
      /> */}
      <View style={styles.title}>
        <PrimaryTitle title="Login Your Account" />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="email-address"
          placeholder="email"
          style={styles.input}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          keyboardType="visible-password"
          placeholder="Password"
          style={styles.input}
          onChangeText={(e) => setPassword(e)}
        />
      </View>
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