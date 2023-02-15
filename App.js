import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import UserDahboard from "./screens/UserDahboard";
import Slider from "./components/Slider";
import WorkerAdminDashboard from "./screens/WorkerAdminDashboard";
import AdminDashboard from "./screens/AdminDashboard";
import QRScanner from "./components/QRScanner";
import EditModel from "./components/EditModel";
import BookedRoom from "./screens/BookedRoom";
import SubmitBills from "./components/SubmitBills";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import AddNewRoom from "./components/AddNewRoom";
export default function App() {
  const SubmitBill = () => {
    return (
      <View>
        <SubmitBills />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="UserDashboard" component={UserDahboard} /> */}
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RoomDetails" component={BookedRoom} />
        <Stack.Screen name="UserDashboard" component={UserDahboard} />
        <Stack.Screen name="Scanner" component={QRScanner} />
        <Stack.Screen name="WorkerAdmin" component={WorkerAdminDashboard} />
        <Stack.Screen name="Admin" component={AdminDashboard} />
        {/* <Stack.Screen name="EditUser" component={EditModel} /> */}
        <Stack.Screen name="SubmitBill" component={SubmitBill} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="EditUser" component={EditUser} />
        <Stack.Screen name="DeleteUser" component={DeleteUser} />
        <Stack.Screen name="AddNewRoom" component={AddNewRoom} />
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <Profile /> */}
        {/* <Home /> */}
        {/* <Slider /> */}
        {/* <QRScanner /> */}
        {/* <UserDahboard /> */}
        {/* <WorkerAdminDashboard /> */}
        {/* <AdminDashboard /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
