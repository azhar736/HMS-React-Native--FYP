import { ScrollView, StyleSheet, Text, View } from "react-native";
import PrimaryTitle from "./PrimaryTitle";
import Toggle from "./Toggle";
import  BASE_URL  from "../config/env.config";
import axios from "axios";
import { useEffect, useState } from "react";
const SudentList = () => {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    getAllStudent();
  }, []);

  const getAllStudent = async () => {
    try {
      console.log("Function Triggedddd");
      console.log(BASE_URL);
      const response = await axios.get(`${BASE_URL}allUsers`);
      const data1 = await response.data;
      console.log("The Data from API:", data1.data);
      setStudentsList(data1.data);
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
  console.log("The DATA IN STATE:", studentsList);
  return (
    <View>
      <PrimaryTitle title="All Students" />
      <View style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          {/*Form heading */}
          <View style={styles.headingCol1}>
            <Text style={styles.heading}>No</Text>
          </View>
          <View style={styles.headingCol2}>
            <Text style={styles.heading}>Email</Text>
          </View>
          <View style={styles.headingCol3}>
            <Text style={styles.heading}>Name</Text>
          </View>
          <View style={styles.headingCol4}>
            <Text style={styles.heading}>Status</Text>
          </View>
        </View>
        <ScrollView style={styles.Container}>
          {studentsList.map((student, index) => (
            // console.log("The Signle Student Detail=", student)
            <View style={styles.textContainer} key={index}>
              {/* Form Body */}
              <View style={styles.textCol1}>
                <Text style={styles.text}>{index + 1}</Text>
              </View>
              <View style={styles.textCol2}>
                <Text style={styles.text}>{student.email}</Text>
              </View>
              <View style={styles.textCol3}>
                <Text style={styles.text}>{student.name}</Text>
              </View>
              <View style={styles.textCol4}>
                <Toggle userId={student._id} status={student.isActive} />
              </View>
            </View>
          ))}
        </ScrollView>
        {/* <View style={styles.totalContainer}>
          <View style={styles.leftContainer}></View>
          <View style={styles.rightContainer}>
            <Text style={styles.text}>Total:</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default SudentList;

const styles = StyleSheet.create({
  Container: {
    height: 500,
    marginBottom: 50,
  },
  rootContainer: {
    marginHorizontal: 16,
  },
  headingContainer: {
    flexDirection: "row",
  },
  headingCol1: {
    padding: 4,
    width: "15%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  headingCol2: {
    padding: 4,
    width: "40%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  headingCol3: {
    padding: 4,
    width: "25%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  headingCol4: {
    padding: 4,
    width: "20%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  textCol1: {
    width: "15%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
  },
  textCol2: {
    width: "40%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
  },
  textCol3: {
    width: "25%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
  },
  textCol4: {
    width: "20%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalContainer: {
    flexDirection: "row",
  },
  leftContainer: {
    width: "75%",
  },
  rightContainer: {
    padding: 4,
    borderWidth: 2,
    width: "25%",
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});
