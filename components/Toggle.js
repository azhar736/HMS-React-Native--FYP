import React, { useEffect, useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BASE_URL } from "@env";
import axios from "axios";
const Toggle = ({ userId, status }) => {
  const [loading, setLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(status);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useEffect(() => {
    UpdateUserStatus();
  }, [isEnabled]);

  const UpdateUserStatus = async () => {
    try {
      setLoading(true);
      console.log("The Base URL is==",BASE_URL);
      const response = await axios.patch(`${BASE_URL}setStatus`, {
        id: userId,
        status: isEnabled,
      });
      const data1 = await response.data;
      console.log("The Data from API:", data1.data);
      if (data1) {
        setLoading(false);
      }
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Feather name="loader" size={24} color="black" />
        </>
      ) : (
        <Switch
          trackColor={{ false: "#fa0536", true: "#58fcb9" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Toggle;
