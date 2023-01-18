import { Button, StyleSheet, Text, View } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import EmergencyContact from "../components/EmergencyContact";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../env.config";
import { Feather } from "@expo/vector-icons";
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
function EmerygencyContactDetails() {
  return <EmergencyContact />;
}
// function Scan() {
//   console.log("press");
//   return <QRScanner />;
// }
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
  console.log("USER ID>>>>>>>", userId);

  const navigation = useNavigation();
  const [userId, setUserId] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const registerComplain = () => {
    console.log("Complain registrated Successfully!");
  };
  const updateProfile = () => {
    console.log("Update Profile");
  };

  const generateBill = () => {
    console.log("generate Bill");
  };
  const Logout = () => {
    navigation.replace("Login");
  };

  const submitYourBill = () => {
    console.log("Clicked");
    navigation.replace("SubmitBill");
  };
  useEffect(() => {
    getTokenFromLocalStorage();
  }, []);
  useEffect(() => {
    fetchUsers();
  }, [userId]);

  const getTokenFromLocalStorage = async () => {
    const userData = await AsyncStorage.getItem("userData");
    const temp = JSON.parse(userData);
    setUserId(temp.User_Id);
    console.log("The LoggedIn User Id:", temp.User_Id);
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      console.log("UUUSSSEEERRR ID", userId);
      const fetchedUser = await axios.post(`${BASE_URL}singleUser`, {
        id: userId,
      });
      const response = await fetchedUser.data;
      if (response?.data?.isActive !== undefined) {
        console.log("USER STATUS", response?.data?.isActive);
        setIsActive(response?.data?.isActive);
        setLoading(false);
      }
    } catch (error) {
      console.log("error ", error.message);
      // setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <>
          <Feather name="loader" size={24} color="black" />
        </>
      ) : (
        <>
          {!isActive ? (
            <>
              <Text>{isActive ? "true" : "false"}</Text>
              <View style={styles.TextContainer}>
                <Text>Sorry You Need To Pay The Bill First</Text>
                <View style={styles.buttonContainer}>
                  <PrimaryButton
                    buttonText="Click here"
                    onTap={submitYourBill}
                  />
                </View>
              </View>
            </>
          ) : (
            <>
              <Text>{isActive ? "true" : "false"}</Text>

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
                          onPress={() => navigation.navigate("Scanner")}
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
                <Drawer.Screen
                  name="Emergency Contact"
                  component={EmerygencyContactDetails}
                />
                <Drawer.Screen name="Submit Bill" component={SubmitBill} />
                <Drawer.Screen name="Logout" component={Logout} />
              </Drawer.Navigator>
            </>
          )}
        </>
      )}
    </>
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
  TextContainer: {
    borderWidth: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 12,
  },
});
