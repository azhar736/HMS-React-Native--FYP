import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import AdminUser from "../components/AdminUser";
const Drawer = createDrawerNavigator();
const Admin = () => {
  return <AdminUser />;
};
const AdminDashboard = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        defaultScreenOptions={{
          title: "User Dashboard",
        }}
        useLegacyImplementation
      >
        <Drawer.Screen name="Admin Dashboard" component={Admin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({});
