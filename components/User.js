import { StyleSheet, Text, View } from "react-native";
import MealList from "./MealList";
import { useNavigation } from "@react-navigation/native";
import PrimaryTitle from "./PrimaryTitle";
import { BASE_URL } from "@env";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import UserAttendenceInfo from "./UserAttendenceInfo";
const User = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}getDetails`);
        const data1 = await response.data;
        console.log(data1.data);
        setMessTimings(data1.data);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchData();
  }, []);
  // console.log(
  //   "The Data=",
  //   messTimings.map(({ breakFastTime }) => breakFastTime)
  // );
  return (
    <View>
      <PrimaryTitle title="Welcome to User Dashboard" />
      <View style={styles.Container}>
        <View style={styles.header}>
          <Text style={styles.headingText}>Mess Timing</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>BreakFast:</Text>
            <Text style={styles.text}>
              {/* {messTimings.map(({ breakFastTime }) => breakFastTime)} */}
              8.00 AM
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Lunch:</Text>
            <Text style={styles.text}>12:00 AM</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Dinner:</Text>
            <Text style={styles.text}>7.00 PM</Text>
          </View>
        </View>
      </View>
      <View>
        <MealList />
      </View>
      <View style={styles.ScanContainer}>
        <MaterialCommunityIcons
          name="line-scan"
          size={36}
          color="black"
          onPress={() => navigation.navigate("Scanner")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Scan</Text>
      </View>
      <View>
        <UserAttendenceInfo />
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 8,
  },
  header: {
    // borderColor: "yellow",
    borderColor: "black",
    alignItems: "center",
  },
  content: {
    borderColor: "blue",
    alignItems: "center",
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: "#58fcb9",
    backgroundColor: "#defff1",
    paddingHorizontal: 8,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    padding: 4,
    marginVertical: 4,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  ScanContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});
