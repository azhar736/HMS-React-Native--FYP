import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import PrimaryTitle from "./PrimaryTitle";
const UserAttendenceInfo = () => {
  return (
    <View>
      <PrimaryTitle title="Track Your Mess Attendence" />
      <View style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          {/*Form heading */}
          <View style={styles.headingCol}>
            <Text style={styles.heading}>Date</Text>
          </View>
          <View style={styles.headingCol}>
            <Text style={styles.heading}>Meal</Text>
          </View>
          <View style={styles.headingCol}>
            <Text style={styles.heading}>Units</Text>
          </View>
          <View style={styles.headingCol}>
            <Text style={styles.heading}>Price</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol}>
            <Text style={styles.text}>01/01/22</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>180</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol}>
            <Text style={styles.text}>01/01/22</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>180</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol}>
            <Text style={styles.text}>01/01/22</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>180</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol}>
            <Text style={styles.text}>01/01/22</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>180</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol}>
            <Text style={styles.text}>01/01/22</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>180</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol}>
            <Text style={styles.text}>01/01/22</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>180</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/* Form Body */}
          <View style={styles.textCol}>
            <Text style={styles.text}>01/01/22</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.textCol}>
            <Text style={styles.text}>180</Text>
          </View>
        </View>
        <View style={styles.totalContainer}>
          <View style={styles.leftContainer}></View>
          <View style={styles.rightContainer}>
            <Text style={styles.text}>Total:</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton buttonText="Generate Bill" />
        </View>
      </View>
    </View>
  );
};

export default UserAttendenceInfo;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 16,
  },
  headingContainer: {
    flexDirection: "row",
  },
  headingCol: {
    flex: 1,
    padding: 4,
    borderWidth: 4,
    borderColor: "black",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  textCol: {
    flex: 1,
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
