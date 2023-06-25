import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Welcome to HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
