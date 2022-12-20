import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import PrimaryButton from "./PrimaryButton";
const MealsFormInput = ({ id, title, units, setSum, sum, rerender }) => {
  const navigation = useNavigation();
  const [input, setInput] = useState(0);
  const [showConfirm, setShowConfirm] = useState(true);
  const confirmButtonHandler = () => {
    console.log("Button Pressed");
    setSum(Number(input) + sum);
    setShowConfirm(false);
  };
  useEffect(() => {
    setShowConfirm(true);
    setInput("");
  }, [rerender]);

  const OnClickHandler = () => {
    // navigation.navigate("ManageExpenses", {
    //   expendeId: id,
    // });
  };
  return (
    <>
      <View style={styles.parentContainer}>
        {/*Form */}
        <View style={styles.container1}>
          {/*No */}
          <Text>1</Text>
        </View>
        <View style={styles.container2}>
          {/*Meals List*/}
          <Text>Biryani</Text>
        </View>
        {showConfirm ? (
          <>
            <View
              style={[styles.container3, !showConfirm && styles.extraStyle]}
            >
              {/*Quantity*/}
              <TextInput
                placeholder="Enter Unit"
                keyboardType="number-pad"
                style={styles.input}
                value={input}
                onChangeText={(newText) => {
                  setInput(newText);
                }}
              />
            </View>
            <View style={styles.container4}>
              {/* <Button
                title="Confirm"
                onPress={() => {
                  confirmButtonHandler();
                }}
              /> */}
              <Pressable
                onPress={() => {
                  confirmButtonHandler();
                }}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </View>
              </Pressable>
            </View>
          </>
        ) : (
          <View style={styles.resultContainer}>
            {/*Quantity*/}
            <Text>{input}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default MealsFormInput;

const styles = StyleSheet.create({
  parentContainer: {
    borderWidth: 2,
    borderColor: "#58fcb9",
    backgroundColor: "#defff1",
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 2,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  container3: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  container4: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  input: {
    paddingVertical: 2,
    // backgroundColor: "white",
  },
  button: {
    backgroundColor: "#24edd9",
    borderColor: "#11baa9",
    borderWidth: 2,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 8,
    textAlign: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  extraStyle: {
    width: 100,
  },
  resultContainer: {
    width: 150,
    textAlign: "center",
    alignItems: "center",
  },
});
