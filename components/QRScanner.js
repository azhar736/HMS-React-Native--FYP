import React, { useState, useEffect } from "react";
import { Alert, Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL  from "../config/env.config";
import axios from "axios";
const QRScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Scanned yet");
  const [userId, setUserId] = useState("");
  //   const navigate = useNavigation();
  //Request Camera Permission
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);
  useEffect(() => {
    getTokenFromLocalStorage();
  }, []);

  const getTokenFromLocalStorage = async () => {
    const userData = await AsyncStorage.getItem("userData");
    console.log("The Data from Local storage on QR CODE Screen is=", userData);
    const temp = JSON.parse(userData);
    console.log(temp.User_Id);
    setUserId(temp.User_Id);
  };
  //What happens when the user scan the QR Code
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("The Data is:", data);
    try {
      console.log("Function Triggereddddd");
      const response = await axios.post(`${BASE_URL}markAttendence`, {
        userId: userId,
        noOfUnits: data,
      });
      // console.log("The Response=", response.data);
      const data1 = await response.data;
      console.log("The Data from API", data1.success);
      if (data1.success) {
        Alert.alert(
          "Thank You",
          "Your attendence has been marked successfully",
          [
            {
              text: "OK",
              onPress: () => navigation.replace("UserDashboard"),
            },
          ]
        );
      }
    } catch (error) {
      console.log("error: ", error.message);
    }
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // navigate.goBack();
  };

  //Check Permissions and return Screns
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.rootcontainer}>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      {scanned && (
        <View style={styles.buttonContainer}>
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        </View>
      )}
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderWidth: 4,
    borderColor: "#58fcb9",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
  buttonContainer: {
    marginVertical: 32,
  },
});
