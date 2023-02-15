import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import useForceUpdate from "use-force-update";
import MealsFormInput from "./MealsFormInput";
import Model from "./Model";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";
import { BASE_URL } from "@env";
const MealsForm = () => {
  const [model, setModel] = useState(false);
  const [rerender, setRerender] = useState(0);
  const [sum, setSum] = useState(0);
  const forceUpdate = useForceUpdate();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      console.log("The URL ::",BASE_URL);
      const response = await axios.get(`${BASE_URL}allMeals`);
      const data1 = response.data;
      // console.log("The meals list", data1.data);
      setMeals(data1.data);
    };
    fetchList();
  }, []);
  const renderItem = (itemData) => {
    console.log(itemData.index);
    console.log(itemData.item.mealName);
    return (
      <MealsFormInput
        id={itemData.index}
        mealname={itemData.item.mealName}
        setSum={setSum}
        sum={sum}
        rerender={rerender}
      />
    );
  };
  const OpenModelHandler = () => {
    console.log("Generate QR Code Button Pressed");
    console.log("Total:", sum);
    if(sum>1){
    setModel(true);
    }
    else{
      Alert.alert("Please Enter Unit's for At Least One Meal");
    }
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
        data={meals}
        key={meals.map((meal) => meal._id)}
        renderItem={renderItem}
        keyboardShouldPersistTaps={"handled"}
        // keyExtractor={(meal) => item.id}
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
