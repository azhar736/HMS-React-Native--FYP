import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const MealsItem = ({ id, title, units }) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    // navigation.navigate("ManageExpenses", {
    //   expendeId: id,
    // });
    console.log("Button Pressed");
  };
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.rootContainer}>
        <View style={styles.leftcontainer}>
          <Text style={styles.description}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.description}>{units}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MealsItem;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#58fcb9",
    backgroundColor: "#defff1",
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  leftcontainer: {
    paddingLeft: 65,
    paddingVertical: 2,
    width: "50%",
  },
  rightContainer: {
    paddingLeft: 55,
    width: "50%",
  },
  expenseItem: {
    padding: 12,
    borderWidth: 2,
    borderColor: "blue",
    borderColor: "yellow",
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
});
