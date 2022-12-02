import { StyleSheet, Text, View } from "react-native";

const PrimaryTitle = ({ title }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PrimaryTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    textAlign: "center",
  },
});
