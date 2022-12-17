import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import PrimaryTitle from "./PrimaryTitle";

const RegisterAComplains = () => {
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
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton buttonText="Submit" />
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
