import "react-native-gesture-handler";
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

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <Profile /> */}
        {/* <Home /> */}
        {/* <Slider /> */}
        <UserDahboard />
        {/* <WorkerAdminDashboard /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
