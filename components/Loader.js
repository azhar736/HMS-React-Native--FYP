import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Loader = () => {
  return (
    <View style={styles.rootContainer}>
      <Feather name="loader" size={44} color="black" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
});
