import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Profile /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
