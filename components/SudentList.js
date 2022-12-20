import { StyleSheet, Text, View } from "react-native";
import PrimaryTitle from "./PrimaryTitle";
import Toggle from "./Toggle";
const SudentList = () => {
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
            <Text style={styles.text}>Azhar</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
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
            <Text style={styles.text}>Azhar</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol1}>
            <Text style={styles.text}>04</Text>
          </View>
          <View style={styles.textCol2}>
            <Text style={styles.text}>test4@gmail.com</Text>
          </View>
          <View style={styles.textCol3}>
            <Text style={styles.text}>Azhar</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol1}>
            <Text style={styles.text}>05</Text>
          </View>
          <View style={styles.textCol2}>
            <Text style={styles.text}>test5@gmail.com</Text>
          </View>
          <View style={styles.textCol3}>
            <Text style={styles.text}>Azhar</Text>
          </View>
          <View style={styles.textCol4}>
            <Toggle />
          </View>
        </View>
        <View style={styles.totalContainer}>
          <View style={styles.leftContainer}></View>
          <View style={styles.rightContainer}>
            <Text style={styles.text}>Total:</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SudentList;

const styles = StyleSheet.create({
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
