import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StudentList from "../components/SudentList";
import MealList from "../components/MealList";
import MealsForm from "../components/MealsForm";
import Model from "../components/Model";
const Drawer = createDrawerNavigator();
const AllMeals = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <MealList />
    </View>
  );
};
const AllStudent = () => {
  return (
    <View>
      <StudentList />
    </View>
  );
};

const MealForm = () => {
  return (
    <View>
      <MealsForm />
    </View>
  );
};

const WorkerAdminDashboard = () => {
  return (
    <Drawer.Navigator
      defaultScreenOptions={{
        title: "Worker Admin Dashboard",
      }}
      useLegacyImplementation
    >
      <Drawer.Screen name="Student List" component={AllStudent} />
      <Drawer.Screen name="Meals List" component={AllMeals} />
      <Drawer.Screen name="Meals Form" component={MealForm} />
    </Drawer.Navigator>
  );
};

export default WorkerAdminDashboard;

const styles = StyleSheet.create({});
