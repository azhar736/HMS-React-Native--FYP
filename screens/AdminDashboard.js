import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import AllStudents from "../components/AllStudents";
import Complains from "../components/Complains";
import EditModel from "../components/EditModel";
const Drawer = createDrawerNavigator();
const Admin = () => {
  return <AllStudents />;
};
const AllComplain = () => {
  return <Complains />;
};
// const Edit = () => {
//   return <EditModel />;
// };
const AdminDashboard = () => {
  return (
    <Drawer.Navigator
      defaultScreenOptions={{
        title: "User Dashboard",
      }}
      useLegacyImplementation
    >
      <Drawer.Screen name="Admin Dashboard" component={Admin} />
      <Drawer.Screen name="All Complains" component={AllComplain} />
    </Drawer.Navigator>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({});
