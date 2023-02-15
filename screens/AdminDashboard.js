import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import AllStudents from "../components/AllStudents";
import Complains from "../components/Complains";
import AllBill from "../components/AllBill";
import EditModel from "../components/EditModel";
import AddNewRoom from "../components/AddNewRoom";
const Drawer = createDrawerNavigator();
  const Admin = () => {
    return <AllStudents />;
  };
const AllComplain = () => {
  return <Complains />;
};
const AllBills = () => {
  return <AllBill />;
};
const AddRoom = () => {
  return <AddNewRoom />;
};
const AdminDashboard = ({route}) => {
  const navigation = useNavigation();
  const Logout = () => {
    navigation.navigate("Login");
  };
  return (
    <Drawer.Navigator
      defaultScreenOptions={{
        title: "User Dashboard",
      }}
      useLegacyImplementation
    >
      <Drawer.Screen name="Admin Dashboard" component={Admin} />
      <Drawer.Screen name="All Complains" component={AllComplain} />
      <Drawer.Screen name="All Bills" component={AllBills} />
      <Drawer.Screen name="Add Room" component={AddRoom} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({});
