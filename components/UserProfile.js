import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env";
import { useEffect } from "react";
import PrimaryButton from "./PrimaryButton";

const UserProfile = ({ route, navigation }) => {
  console.log("The USer ID on Profile Screen:", route.params.userId);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}singleUser`, {
          //   id: route.params.userId,
        });
        const data1 = await response.data;
        console.log("THE  USER DATA FROM SERVER", data1.data);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome User</Text>
        <View style={styles.userContainer}>
          <View style={styles.col1}>
            <View style={styles.row}>
              <Text style={styles.heading}>User Name</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Email</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Account Status</Text>
            </View>
          </View>
          <View style={styles.col2}>
            <View style={styles.row}>
              <Text style={styles.text}>Azhar</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>azhar@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Active</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            buttonText="Go Back"
            onTap={() => navigation.replace("UserDashboard")}
          />
        </View>
      </View>
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  userContainer: {
    borderWidth: 2,
    borderColor: "#58fcb9",
    width: 290,
    height: 300,
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 8,
  },
  col1: {
    marginHorizontal: 4,
    width: "45%",
    justifyContent: "space-evenly",
  },
  col2: {
    marginHorizontal: 4,
    width: "50%",
    justifyContent: "space-evenly",
  },
  row: {
    borderBottomWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  heading: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
  },
  buttonContainer: {
    marginTop: 16,
  },
});
