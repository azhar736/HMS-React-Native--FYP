import { StyleSheet, Text, View } from "react-native";

const PrimaryTitle = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Create Your Account</Text>
    </View>
  );
};

export default PrimaryTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    textAlign: "center",
  },
});
