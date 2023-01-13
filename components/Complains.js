import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Complains = () => {
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
      <View style={styles.formContainer}>
        <View style={styles.textContainer1}>
          <Text>01</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text>Azhar</Text>
        </View>
        <View style={styles.textContainer3}>
          <Text>Active</Text>
        </View>
        <View style={styles.textContainer4}>
          <Text>This is my Complain.....</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.textContainer1}>
          <Text>02</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text>Hammad</Text>
        </View>
        <View style={styles.textContainer3}>
          <Text>Active</Text>
        </View>
        <View style={styles.textContainer4}>
          <Text>
            This is my Complain...... Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.textContainer1}>
          <Text>01</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text>Azhar</Text>
        </View>
        <View style={styles.textContainer3}>
          <Text>Active</Text>
        </View>
        <View style={styles.textContainer4}>
          <Text>This is my Complain.....</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.textContainer1}>
          <Text>01</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text>Azhar</Text>
        </View>
        <View style={styles.textContainer3}>
          <Text>Active</Text>
        </View>
        <View style={styles.textContainer4}>
          <Text>This is my Complain.....</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.textContainer1}>
          <Text>01</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text>Azhar</Text>
        </View>
        <View style={styles.textContainer3}>
          <Text>Active</Text>
        </View>
        <View style={styles.textContainer4}>
          <Text>This is my Complain.....</Text>
        </View>
      </View>
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
