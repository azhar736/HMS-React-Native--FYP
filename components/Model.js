import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import QRCode from "react-native-qrcode-svg";
// import QRCode from "react-qr-code";
import QRCode from "react-native-qrcode-generator";
const Model = ({ model, modelAction, total }) => {
  var id = "45678534567";
  const ModelClose = () => {
    modelAction();
  };
  return (
    <Modal transparent={true} visible={model} animationType="fade">
      <View style={styles.rootContainer}>
        <Pressable style={styles.textContainer}>
          <View style={styles.buttonContainer}>
            <Ionicons
              onPress={ModelClose}
              name="close"
              size={28}
              color="black"
            />
          </View>
          <View style={styles.svgContainer}>
            <QRCode
              value={`${id}_${total}`}
              size={200}
              bgColor="black"
              fgColor="white"
            />
            {/* <QRCode
              size={130}
              value={[{ data: "2345643" }, { data: "_" }, { data: total }]}
            /> */}
            {/* <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value="Hello"
              viewBox={`0 0 256 256`}
            /> */}
          </View>
          {/* <Button title="Close Modal" onPress={ModelClose} /> */}
        </Pressable>
      </View>
    </Modal>
  );
};

export default Model;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#000000ee",
    flex: 1,
    borderWidth: 4,
  },
  textContainer: {
    borderWidth: 4,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    height: 300,
    marginHorizontal: 50,
    marginVertical: 200,
  },
  buttonContainer: {
    padding: 8,
    marginRight: 12,
    marginTop: 8,
    alignItems: "flex-end",
  },
  svgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
