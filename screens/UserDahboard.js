import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import SecondryButton from "../components/SecondryButton";
import User from "../components/User";
import RegisterAComplains from "../components/RegisterAComplains";
import UserAttendenceInfo from "../components/UserAttendenceInfo";
import SubmitBills from "../components/SubmitBills";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import QRScanner from "../components/QRScanner";
function RegisterAComplain() {
  return (
    <View style={{ flex: 1 }}>
      <RegisterAComplains />
    </View>
  );
}
function TrackAttendence() {
  return (
    <View>
      <UserAttendenceInfo />
    </View>
  );
}
const SubmitBill = () => {
  return (
    <View>
      <SubmitBills />
    </View>
  );
};

function UserDashboard() {
  return <User />;
}
function Scan() {
  console.log("press");
  return <QRScanner />;
}
// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }
const Drawer = createDrawerNavigator();
const UserDahboard = () => {
  const registerComplain = () => {
    console.log("Complain registrated Successfully!");
  };
  const updateProfile = () => {
    console.log("Update Profile");
  };

  const generateBill = () => {
    console.log("generate Bill");
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        defaultScreenOptions={{
          title: "User Dashboard",
        }}
        useLegacyImplementation
      >
        <Drawer.Screen
          name="User Dashboard"
          component={UserDashboard}
          options={{
            headerRight: () => (
              <View style={{ marginRight: 25 }}>
                <MaterialCommunityIcons
                  name="line-scan"
                  size={28}
                  color="black"
                  onPress={Scan}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Register A Complain"
          component={RegisterAComplain}
        />
        <Drawer.Screen
          name="Check Attendence Details"
          component={TrackAttendence}
        />
        <Drawer.Screen name="Submit Bill" component={SubmitBill} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <View style={styles.rootContainer}>
    //   <View style={styles.topBar}>
    //     <View>
    //       <Ionicons name="arrow-back-sharp" size={24} color="black" />
    //     </View>
    //     <View>
    //       <Text style={styles.heading}>User Dashboard</Text>
    //     </View>
    //     <View>
    //       <MaterialCommunityIcons name="line-scan" size={24} color="black" />
    //     </View>
    //   </View>
    //   <View style={styles.container}>
    //     <View style={styles.leftContainer}>
    //       <SecondryButton buttonText="Complain" onPress={registerComplain} />
    //       <SecondryButton buttonText="UpdateProfile" onPress={updateProfile} />
    //       <SecondryButton buttonText="Generate Bill" onPress={generateBill} />
    //       <SecondryButton buttonText="Submit Bill" onPress={submitBill} />
    //     </View>
    //     <View style={styles.rightContainer}>
    //       <View style={styles.welcomeContainer}>
    //         <Text style={styles.welcomeText}>Welcome</Text>
    //       </View>
    //       <View>
    //         <Text>Break-Fast :7.30 AM to 9:00 AM</Text>
    //         <Text>Lunch :12.30 PM to 1.30 PM</Text>
    //         <Text>Dinner :7.30 PM to 8:30 PM</Text>
    //       </View>
    //       <Text>Welcome</Text>
    //       <Text>Welcome</Text>
    //       <Text>Welcome</Text>
    //       <Text>Welcome</Text>
    //     </View>
    //   </View>
    // </View>
  );
};

export default UserDahboard;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 70,
    marginHorizontal: 20,
    borderWidth: 2,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    width: "40%",
    padding: 8,
    borderWidth: 2,
  },
  rightContainer: {
    width: "60%",
    borderWidth: 2,
  },
  welcomeContainer: {
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
