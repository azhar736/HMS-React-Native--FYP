import { StyleSheet, Text, View } from "react-native";
import PrimaryTitle from "./PrimaryTitle";

const EmergencyContact = () => {
  return (
    <View style={styles.rootCotainer}>
      <PrimaryTitle title="Emergency Contact" />
      <View style={styles.Container}>
        <View style={styles.Container1}>
          {/*Title*/}
          <Text style={styles.heading}>Emergency Contact</Text>
        </View>
        <View style={styles.Container2}>
          {/*No*/}
          <Text style={styles.text}>+9922221333</Text>
        </View>
      </View>
      <View style={styles.Container}>
        <View style={styles.Container1}>
          {/*Title*/}
          <Text style={styles.heading}>Ambulance Contact</Text>
        </View>
        <View style={styles.Container2}>
          {/*No*/}
          <Text style={styles.text}>+9492222222</Text>
        </View>
      </View>
      <View style={styles.Container}>
        <View style={styles.Container1}>
          {/*Title*/}
          <Text style={styles.heading}>Warden Contact</Text>
        </View>
        <View style={styles.Container2}>
          {/*No*/}
          <Text style={styles.text}>+921111111</Text>
        </View>
      </View>
    </View>
  );
};

export default EmergencyContact;

const styles = StyleSheet.create({
  rootCotainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  Container: {
    flexDirection: "row",
    width: 350,
  },
  Container1: {
    // borderTopWidth: 2,
    // borderLeftWidth: 2,
    // borderBottomWidth: 2,
    borderWidth: 4,
    borderRadius: 6,
    marginVertical: 4,
    marginHorizontal: 4,
    borderColor: "#58fcb9",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 2,
  },
  Container2: {
    borderWidth: 4,
    borderRadius: 6,
    marginVertical: 4,
    marginHorizontal: 4,
    borderColor: "#58fcb9",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 2,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
});
