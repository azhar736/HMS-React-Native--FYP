import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import EditModel from "./EditModel";
import PrimaryTitle from "./PrimaryTitle";
import Toggle from "./Toggle";
const AllStudents = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Edit", value: "edit" },
    { label: "Delete", value: "delete" },
  ]);
  const [selectedItems, setSelectedItems] = useState("");
  const navigation = useNavigation();
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
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol1}>
            <Text style={styles.text}>01</Text>
          </View>
          <View style={styles.textCol2}>
            <Text style={styles.text}>test@gmail.com</Text>
          </View>
          <View style={styles.textCol3}>
            <Text style={styles.text}>Azhar</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
          </View>
          <View style={styles.textCol5}>
            <DropDownPicker
              open={open}
              placeholder={""}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onSelectItem={(item) => {
                // console.log(item);
                setSelectedItems(item);
              }}
              disableBorderRadius={true}
              style={{
                borderWidth: 0,
                padding: 0,
              }}
              textStyle={{
                fontSize: 12,
                fontWeight: "bold",
              }}
              containerStyle={
                {
                  // borderWidth: 2,
                }
              }
              arrowIconStyle={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol1}>
            <Text style={styles.text}>02</Text>
          </View>
          <View style={styles.textCol2}>
            <Text style={styles.text}>test2@gmail.com</Text>
          </View>
          <View style={styles.textCol3}>
            <Text style={styles.text}>Uzair</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
          </View>
          <View style={styles.textCol5}>
            <DropDownPicker
              open={open}
              placeholder={""}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onSelectItem={(item) => {
                // console.log(item);
                setSelectedItems(item);
              }}
              disableBorderRadius={true}
              style={{
                borderWidth: 0,
                padding: 0,
              }}
              textStyle={{
                fontSize: 12,
                fontWeight: "bold",
              }}
              containerStyle={
                {
                  // borderWidth: 2,
                }
              }
              arrowIconStyle={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol1}>
            <Text style={styles.text}>03</Text>
          </View>
          <View style={styles.textCol2}>
            <Text style={styles.text}>test3@gmail.com</Text>
          </View>
          <View style={styles.textCol3}>
            <Text style={styles.text}>Kashif</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
          </View>
          <View style={styles.textCol5}>
            <DropDownPicker
              open={open}
              placeholder={""}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onSelectItem={(item) => {
                // console.log(item);
                setSelectedItems(item);
              }}
              disableBorderRadius={true}
              style={{
                borderWidth: 0,
                padding: 0,
              }}
              textStyle={{
                fontSize: 12,
                fontWeight: "bold",
              }}
              containerStyle={
                {
                  // borderWidth: 2,
                }
              }
              arrowIconStyle={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol1}>
            <Text style={styles.text}>01</Text>
          </View>
          <View style={styles.textCol2}>
            <Text style={styles.text}>test@gmail.com</Text>
          </View>
          <View style={styles.textCol3}>
            <Text style={styles.text}>Azhar</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
          </View>
          <View style={styles.textCol5}>
            <DropDownPicker
              open={open}
              placeholder={""}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onSelectItem={(item) => {
                // console.log(item);
                setSelectedItems(item);
              }}
              disableBorderRadius={true}
              style={{
                borderWidth: 0,
                padding: 0,
              }}
              textStyle={{
                fontSize: 12,
                fontWeight: "bold",
              }}
              containerStyle={
                {
                  // borderWidth: 2,
                }
              }
              arrowIconStyle={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <View>
          <View style={styles.Container}>
            <View style={styles.header}>
              <Text style={styles.headingText}>Mess Timing</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>BreakFast:</Text>
                <Text style={styles.text}>8.00 AM</Text>
                <Text style={styles.text}>Edit</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>Lunch:</Text>
                <Text style={styles.text}>12:00 AM</Text>
                <Text style={styles.text}>Edit</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>Dinner:</Text>
                <Text style={styles.text}>7.00 PM</Text>
                <Text style={styles.text}>Edit</Text>
              </View>
            </View>
          </View>
        </View>
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
  headingCol1: {
    padding: 4,
    width: "10%",
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
    width: "15%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  headingCol4: {
    padding: 4,
    width: "15%",
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  headingCol5: {
    width: "20%",
    borderWidth: 4,
    borderColor: "black",
  },
  textContainer: {
    flexDirection: "row",
  },
  textCol1: {
    width: "10%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol2: {
    width: "40%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol3: {
    width: "15%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol4: {
    width: "15%",
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  textCol5: {
    width: "20%",
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
