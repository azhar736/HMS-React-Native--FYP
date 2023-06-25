import { ScrollView, StyleSheet, Text, View } from "react-native";
import BASE_URL  from "../config/env.config";
import axios from "axios";
import { useEffect, useState } from "react";

const Complains = () => {
  const [complains, setComplaints] = useState([]);
  useEffect(() => {
    Allcomplain();
  }, []);

  const Allcomplain = async () => {
    console.log("The URL on Complain Page is :::",BASE_URL);
    try {
      const response = await axios.get(`${BASE_URL}allComplains`);
      // console.log("The Response=", response.data);
      const data1 = await response.data;
      console.log(data1.data);
      setComplaints(data1.data);
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  console.log("ALL COMPLAINS::", complains);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headingContainer}>
        <View style={styles.textContainer1}>
          <Text style={styles.headingtext}>No</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.headingtext}>Student Name</Text>
        </View>
        <View style={styles.textContainer3}>
          <Text style={styles.headingtext}>Satus</Text>
        </View>
        <View style={styles.textContainer4}>
          <Text style={styles.headingtext}>Complains</Text>
        </View>
      </View>
      <ScrollView style={styles.listContainer}>
      {complains.map((complain, index) => (
        <View key={index} style={styles.formContainer}>
          <View style={styles.textContainer1}>
            <Text>{index+1}</Text>
          </View>
          <View style={styles.textContainer2}>
            <Text>{complain.userName}</Text>
          </View>
          <View style={styles.textContainer3}>
            <Text>Active</Text>
          </View>
          <View style={styles.textContainer4}>
            <Text>{complain.complainMessage}</Text>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

export default Complains;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 40,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  headingContainer: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer1: {
    width: "10%",
    borderLeftWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer2: {
    width: "30%",
    borderLeftWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer3: {
    width: "15%",
    borderLeftWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer4: {
    width: "45%",
    borderLeftWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderRightWidth:2,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  headingtext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formContainer: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:4,
    backgroundColor: "whitesmoke",
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row",
    elevation:7,
  },
  listContainer:{
   height:500,
  },
});
