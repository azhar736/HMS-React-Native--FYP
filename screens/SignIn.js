import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryTitle from "../components/PrimaryTitle";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
const SignIn = () => {
  return (
    <View style={styles.rootContainer}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
      <View style={styles.title}>
        <PrimaryTitle title="Login Your Account" />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="email-address"
          placeholder="email"
          style={styles.input}
          //   value={mail}
          //   onChange={emailHandler}
        />
        <TextInput
          keyboardType="visible-password"
          placeholder="Password"
          style={styles.input}
          //   value={password}
          //   onChange={passwordHandler}
        />
      </View>
      <PrimaryButton buttonText="SignIn" />
      <View style={styles.textContainer}>
        <Text style={styles.subText}>
          Don't have a account?<Text style={styles.linkText}>Sign UP</Text>
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
