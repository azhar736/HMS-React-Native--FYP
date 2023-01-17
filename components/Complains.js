import { StyleSheet, Text, View } from "react-native";
import { BASE_URL } from "../env.config";
import axios from "axios";
import { useEffect, useState } from "react";

const Complains = () => {
  const [complains, setComplaints] = useState([]);
  useEffect(() => {
    Allcomplain();
  }, []);

  const Allcomplain = async () => {
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

  console.log("ALL COMPLAINS", complains);
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
      {complains.map((complain, index) => (
        <View style={styles.formContainer}>
          <View style={styles.textContainer1}>
            <Text>{index}</Text>
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
    </View>
  );
};

export default Complains;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 50,
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
    borderWidth: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer2: {
    width: "30%",
    borderWidth: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer3: {
    width: "15%",
    borderWidth: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer4: {
    width: "45%",
    borderWidth: 4,
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
  },
});
