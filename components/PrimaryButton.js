import { StyleSheet, Text, View } from "react-native";

const PrimaryButton = () => {
  return (
    <View>
      <Text style={styles.title}>Sign UP</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: "black",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#1AB65C",
  },
});
