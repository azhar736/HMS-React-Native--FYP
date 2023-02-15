import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env";
import { useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

const UserProfile = ({ route, navigation }) => {
  console.log("The USer ID on Profile Screens::", route.params.userId);
  const [name,setName]=useState("");
  const [email,setEmail] = useState("");
  const [accountStatus,setAccountStatus] = useState("");
  const [seatNo,setSeatNo] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      console.log("Base Url on Profile Page is:",BASE_URL);
      try {
        const response = await axios.post(`${BASE_URL}singleUser`, {
            id: route.params.userId,
        });
        const data1 = await response.data;
        console.log("THE  USER DATA FROM SERVER on USER Profile Page", data1.data);
        setName(data1.data?.name);
        setEmail(data1.data?.email);
        if(data1.data?.isActive){
          console.log("Active")
          setAccountStatus("Active")
        }
        else{
          console.log("Disabled");
          setAccountStatus("Disabled")
        }
        setSeatNo(data1.seatNumber)
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
            <View style={styles.row}>
              <Text style={styles.heading}>Seat No</Text>
            </View>
          </View>
          <View style={styles.col2}>
            <View style={styles.row}>
              <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>{email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>{accountStatus}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>{seatNo}</Text>
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
