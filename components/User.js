import { StyleSheet, Text, View } from "react-native";
import MealList from "./MealList";
import PrimaryTitle from "./PrimaryTitle";
const User = () => {
  return (
    <View>
      <PrimaryTitle title="Welcome to User Dashboard" />
      <View style={styles.Container}>
        <View style={styles.header}>
          <Text style={styles.headingText}>Mess Timing</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>BreakFast:</Text>
            <Text style={styles.text}>8.00 AM</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Lunch:</Text>
            <Text style={styles.text}>12:00 AM</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Dinner:</Text>
            <Text style={styles.text}>7.00 PM</Text>
          </View>
        </View>
      </View>
      <View>
        <MealList />
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 8,
  },
  header: {
    borderColor: "yellow",
    alignItems: "center",
  },
  content: {
    borderColor: "blue",
    alignItems: "center",
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: "#58fcb9",
    backgroundColor: "#defff1",
    paddingHorizontal: 8,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    padding: 4,
    marginVertical: 4,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});
