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
    borderWidth:1,
    borderColor: "#58fcb9",
    backgroundColor: "#defff1",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    flexDirection: "row",
    elevation:9,
  },
  Container1: {
    marginVertical: 4,
    marginHorizontal: 4,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 2,
  },
  Container2: {
    marginVertical: 4,
    marginHorizontal: 4,
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
