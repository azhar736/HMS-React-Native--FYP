import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useForceUpdate from "use-force-update";
import MealsFormInput from "./MealsFormInput";
import Model from "./Model";
import PrimaryButton from "./PrimaryButton";
const MealsForm = () => {
  const [model, setModel] = useState(false);
  const [rerender, setRerender] = useState(0);
  const [sum, setSum] = useState(0);
  const forceUpdate = useForceUpdate();
  const DATA = [
    {
      id: "1",
      title: "Biryani",
      units: "100",
    },
    {
      id: "2",
      title: "Qorma",
      units: "80",
    },
  ];
  const renderItem = (itemData) => {
    // console.log(itemData.item);
    return (
      <MealsFormInput
        {...itemData.item}
        setSum={setSum}
        sum={sum}
        rerender={rerender}
      />
    );
  };
  const OpenModelHandler = () => {
    console.log("Total:", sum);
    setModel(true);
  };
  const CloseModelHanler = () => {
    setModel(false);
    setSum(0);
    forceUpdate();
    setRerender(rerender + 1);
  };
  return (
    <View>
      <View style={styles.parentContainer}>
        {/*Form */}
        <View style={styles.container1}>
          {/*No */}
          <Text>No</Text>
        </View>
        <View style={styles.container2}>
          {/*Meals List*/}
          <Text>Meals</Text>
        </View>
        <View style={styles.container3}>
          {/*Quantity*/}
          <Text>Quantity</Text>
        </View>
        <View style={styles.container3}>
          {/*Quantity*/}
          <Text>_</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyboardShouldPersistTaps={"handled"}
        keyExtractor={(item) => item.id}
      />
      {/*Button*/}
      <View style={styles.buttonContainer}>
        <PrimaryButton buttonText="Generate QR Code" onTap={OpenModelHandler} />
      </View>
      <View>
        {model && (
          <Model model={model} modelAction={CloseModelHanler} total={sum} />
        )}
      </View>
    </View>
  );
};

export default MealsForm;

const styles = StyleSheet.create({
  parentContainer: {
    borderWidth: 2,
    borderColor: "#58fcb9",
    backgroundColor: "#defff1",
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 32,
    marginBottom: 4,
  },
  container1: {
    alignItems: "center",
    width: 30,
  },
  container2: {
    alignItems: "center",
    width: 150,
  },
  container3: {
    alignItems: "center",
    width: 180,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
});
