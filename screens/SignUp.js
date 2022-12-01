import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTitle from "../components/PrimaryTitle";

const SignUp = () => {
  return (
    <View style={styles.rootContainer}>
      {/*Back Incon */}
      {/*Title */}
      <View>
        <PrimaryTitle />
      </View>
      <View style={styles.formContainer}>
        {/*Name */}
        <TextInput
          keyboardType="default"
          placeholder="Enter Your FULL Name"
          style={styles.input}
        />
        {/*Email*/}
        <TextInput
          keyboardType="email-address"
          placeholder="Enter Your email - address"
          style={styles.input}
        />
        {/*PassWord*/}
        <TextInput
          keyboardType="visible-password"
          placeholder="Password"
          style={styles.input}
        />
      </View>
      {/*Remember me*/}
      {/*SignUp Button*/}
      <PrimaryButton />
      {/*Already have an Account ? Sign in*/}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 16,
    marginVertical: 70,
  },
  formContainer: {
    marginVertical: 50,
  },
  input: {
    backgroundColor: "#69ffaf",
    borderWidth: 2,
    borderColor: "black",
    paddingVertical: 6,
    padding: 8,
    marginVertical: 8,
  },
});
