import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const EditModel = () => {
  return (
    <Modal transparent={true} animationType="fade">
      <View style={styles.rootContainer}>
        <Pressable style={styles.textContainer}>
          <View style={styles.Container}>
            {/* Form Body */}
            <View style={styles.textCol1}>
              <TextInput placeholder="Enter Name" />
            </View>
            <View style={styles.textCol1}>
              <TextInput placeholder="Enter Email" />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Update" />
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default EditModel;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#000000ee",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    height: 200,
    width: 300,
    marginHorizontal: 50,
    marginVertical: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    width: 200,
    flexDirection: "column",
  },
  textCol1: {
    borderWidth: 2,
    padding: 4,
    borderColor: "#58fcb9",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 8,
  },
});
