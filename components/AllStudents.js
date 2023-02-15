import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BASE_URL } from "@env";
import axios from "axios";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryTitle from "./PrimaryTitle";
import Toggle from "./Toggle";
const AllStudents = ({updatedUser}) => {
  const [selectedItems, setSelectedItems] = useState("");
  const navigation = useNavigation();
  const [studentsList, setStudentsList] = useState([]);
  const[toggle,setToggle]=useState(false);

  useEffect(() => {
    getAllStudent();
  }, []);
  
  useEffect(() => {
    getAllStudent();
  }, [toggle]);

  const getAllStudent = async () => {
    try {
      console.log("Function Triggered");
      console.log(BASE_URL)
      const response = await axios.get(`${BASE_URL}allUsers`);
      const data1 = await response.data;
      console.log("The Data from API::", data1.data);
      setStudentsList(data1.data);
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
  useEffect(() => {
    let array = [];
    let myValue;
    const ModelHandler = () => {
      // console.log("data:", selectedItems);
      array.push(selectedItems);
      array.map((item) => {
        // console.log("The Signle item is:", item.value);
        myValue = item.value;
      });
      // console.log("My Selected Value", myValue);
      // console.log("The Data=", myVal);
      if (myValue == "edit") {
        console.log("My value is edit");
        navigation.navigate("EditUser");
        OpneModelHandler();
      } else if (myValue == "delete") {
        console.log("My value is delete");
      }
    };
    ModelHandler();
  }, [selectedItems]);

  const OpneModelHandler = () => {
    console.log("OpneModelHandler called");
    return console.log("Return this log");
  };

  const deletUsers = async ({userId}) => {
    console.log("The USER ID  Want to Delete",userId);
    console.log(BASE_URL);
    try {
      setToggle(false);
        const fetchedUser = await axios.post(`${BASE_URL}deletUser`,{
          id:userId
        });
        const response = await fetchedUser.data;
        console.log("The API Response",response);
        if(response.success) {
          setToggle(true);
            Alert.alert("Deleted Successfully","User has been Deleted successfully",[
                {
                    text:'ok',
                    onPress:()=>navigation.navigate("Admin")
                }
            ]);
            // navigation.navigate("Admin");
        }
    } catch (error) {
      console.log("error ", error.message);
    }
  };

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
            <Text style={styles.heading}>Active</Text>
          </View>
          <View style={styles.headingCol5}>
            <Text style={styles.heading}>Status</Text>
          </View>
          <View style={styles.headingCol6}>
            <Text style={styles.heading}>Status</Text>
          </View>
        </View>
        <ScrollView style={styles.listContainer}>
          {studentsList.map((student, index) => (
            // console.log("The Signle Student Detail=", ---> Id of every user student._id)
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
            <Pressable onPress={()=>navigation.navigate("EditUser",{userId:student._id,userName:student.name,userEmail:student.email})} style={styles.textCol5}>
            <Text>Edit</Text>
        </Pressable>
            <Pressable onPress={()=>deletUsers({userId:student._id})} style={styles.textCol6}>
            <Text>Delete</Text>
        </Pressable>
          </View>
           
))}
        </ScrollView>
      </View>
    </View>
  );
};

export default AllStudents;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 8,
  },
  headingContainer: {
    flexDirection: "row",
  },
  listContainer: {
    height:550
  },
  headingCol1: {
    padding: 4,
    width: "8%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  headingCol2: {
    padding: 4,
    width: "35%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  headingCol3: {
    padding: 4,
    width: "14%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  headingCol4: {
    padding: 4,
    width: "12%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  headingCol5: {
    width: "15%",
    borderWidth: 4,
    borderColor: "black",
  },
  headingCol6: {
    width: "16%",
    borderWidth: 4,
    borderColor: "black",
  },
  textContainer: {
    flexDirection: "row",
  },
  textCol1: {
    width: "8%",    
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol2: {
    width: "35%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol3: {
    width: "14%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol4: {
    width: "12%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol5: {
    width: "15%",
    borderColor: "#346eeb",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#58fcb9",
  },
  textCol6: {
    width: "16%",
    borderColor: "#346eeb",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#58fcb9",
  },
  heading: {
    fontSize: 14,
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
  Container: {
    marginVertical: 8,
    marginTop: 50,
  },
  header: {
    borderColor: "yellow",
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
    width: 200,
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
});
