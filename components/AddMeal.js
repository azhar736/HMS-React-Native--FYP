import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PrimaryTitle from './PrimaryTitle';
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import BASE_URL from '../config/env.config';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
const AddMeal = () => {
    const [mealName, setMealName] = useState("");
    const [units, setUnits] = useState("");
    const navigation = useNavigation();
    const addMeal = async () => {
        console.log("The Base URL on Add New Room Page ::",BASE_URL);
        console.log(mealName,units);
        try {
          const response = await axios.post(`${BASE_URL}addMeal`, {
            mealName,
            units
          });
          const data1 = await response.data;
          console.log("The Data from the server ::", data1);
          if(data1.data){
            console.log("SUccess")
            navigation.goBack("Admin");
          }
          else{
            console.log("Failed to")
          }
        } catch (error) {
          console.log("error", error.message);
        }
      };
  return (
    <View style={styles.rootContainer}>
    <PrimaryTitle title="Add New Meal" />
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Meal Name"
        onChangeText={(e) => setMealName(e)}
      />
    </View>
    <View style={styles.descripContainer}>
      <TextInput
        placeholder="Enter Meal Units"
        onChangeText={(e) => setUnits(e)}
      />
    </View>
    <View style={styles.buttonContainer}>
      <PrimaryButton buttonText="Add Meal" onTap={addMeal} />
    </View>
  </View>
  )
}

export default AddMeal

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      paddingTop: 100,
      alignItems: "center",
    },
    inputContainer: {
      borderWidth: 2,
      backgroundColor: "#defff1",
      borderColor: "#58fcb9",
      width: 250,
      borderRadius: 4,
      paddingVertical: 4,
      paddingHorizontal: 4,
      marginVertical: 8,
    },
    descripContainer: {
      borderWidth: 2,
      backgroundColor: "#defff1",
      borderColor: "#58fcb9",
      width: 250,
      borderRadius: 8,
      paddingVertical: 16,
      paddingHorizontal: 4,
      marginVertical: 8,
    },
    buttonContainer: {
      marginTop: 10,
    },
  });