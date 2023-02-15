import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
const Profile = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Ionicons
          style={styles}
          name="arrow-back-sharp"
          size={24}
          color="black"
        />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Fill Your Profile</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.image}></View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fileds}>Azhar</Text>
        <Text style={styles.fileds}>Mehmood</Text>
        <Text style={styles.fileds}>Email</Text>
        <Text style={styles.fileds}>Reg No</Text>
        <Text style={styles.fileds}>Ph No</Text>
      </View>
      <PrimaryButton buttonText="Continue" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 16,
    marginVertical: 70,
  },
  container: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  headingContainer: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: "lightgrey",
    borderRadius: 50,
  },
  fieldContainer: {
    marginVertical: 50,
    alignItems: "center",
  },
  fileds: {
    width: 300,
    backgroundColor: "#defff1",
    borderWidth: 2,
    borderColor: "#58fcb9",
    paddingVertical: 6,
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
    paddingStart: 10,
  },
});
