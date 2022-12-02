import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Category = ({ Title, isActive, style }) => {
  return (
    <View style={[styles.container, isActive && style]}>
      <Text>{Title}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#58fcb9",
    width: 110,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
