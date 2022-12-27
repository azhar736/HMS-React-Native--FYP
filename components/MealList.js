import axios from "axios";
import { BASE_URL } from "../env.config";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MealsItem from "./MealsItem";
import { useEffect, useState } from "react";

const MealList = () => {
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
    {
      id: "3",
      title: "Beef",
      units: "130",
    },
    {
      id: "4",
      title: "Beef",
      units: "130",
    },
    {
      id: "5",
      title: "Beef",
      units: "130",
    },
    {
      id: "6",
      title: "Beef",
      units: "130",
    },
    {
      id: "7",
      title: "Beef",
      units: "130",
    },
    {
      id: "8",
      title: "Beef",
      units: "130",
    },
    {
      id: "9",
      title: "Beef",
      units: "130",
    },
    {
      id: "10",
      title: "Beef",
      units: "130",
    },
    {
      id: "11",
      title: "Beef",
      units: "130",
    },
    {
      id: "12",
      title: "Beef",
      units: "130",
    },
    {
      id: "13",
      title: "Beef",
      units: "130",
    },
  ];
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      const response = await axios.get(`${BASE_URL}allMeals`);
      const data1 = response.data;
      // console.log("The meals list", data1.data);
      setMeals(data1.data);
    };
    fetchList();
  }, []);

  const renderItem = (itemData) => {
    // console.log(itemData.item);
    return <MealsItem {...itemData.item} />;
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.listContainer}>
        <View style={styles.leftConatiner}></View>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.heading}>Meals List</Text>
            <Text style={styles.heading}>Units</Text>
          </View>
          <FlatList data={meals} renderItem={renderItem} />
          {/* {meals.map((item) => {
            console.log("The item is: ", item);
          })} */}
        </View>
      </View>
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  listContainer: {
    height: 300,
    width: 300,
  },
  header: {
    // borderWidth: 2,
    marginHorizontal: 8,
    // borderRadius: 6,
    // borderColor: "#58fcb9",
    // backgroundColor: "#defff1",
    paddingVertical: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
