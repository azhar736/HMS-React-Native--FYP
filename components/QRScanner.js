import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Scanned yet");
  //   const navigate = useNavigation();
  //Request Camera Permission
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);
  //What happens when the user scan the QR Code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("The Data is:", data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
    borderWidth: 4,
    borderColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderWidth: 2,
    borderColor: "red",
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
