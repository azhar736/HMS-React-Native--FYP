import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const BookedRoom = ({ route, navigation }) => {
  useEffect(() => {
    const getTokenFromLocalStorage = async () => {
      const userData = await AsyncStorage.getItem("userData");
      const storageObj = JSON.parse(userData);
      console.log("The Data from Local storage=", storageObj.Auth_Token);
    };
    getTokenFromLocalStorage();
  }, []);
  // const sendRequest = async () => {
  //   console.log(`${BASE_URL}loginUser`);
  //   try {
  //     const response = await axios.post(`${BASE_URL}loginUser`, {
  //       email,
  //       password,
  //     });
  //     const result = await response.data;
  //     // console.log("The Data from the server", result?.authToken);
  //     const Token = result?.authToken;
  //     const Name = result?.name;
  //     const Userid = result?.id;
  //     if (Token) {
  //       setLoginIsTrue(true);
  //       await AsyncStorage.setItem(
  //         "userData",
  //         JSON.stringify({
  //           Auth_Token: Token,
  //           User_Name: Name,
  //           User_Id: Userid,
  //         })
  //       );
  //       navigation.navigate("Home");
  //     }
  //   } catch (error) {
  //     console.log("error", error.message);
  //   }
  // };
  const handleClick = () => {
    console.log("Button Clicked");
    console.log(route.params);
    navigation.navigate("UserDashboard");
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        {/*Images */}
        <Image
          source={{
            uri:
              "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics3.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          {/*Title */}
          <Text style={styles.headingText}>Title</Text>
        </View>
        <View>
          {/*Details */}
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Text>
        </View>
      </View>
      <View>
        {/* Button */}
        <PrimaryButton buttonText="Booked Now" onTap={handleClick} />
      </View>
    </View>
  );
};

export default BookedRoom;

const styles = StyleSheet.create({
  rootContainer: {
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  image: {
    height: 200,
    width: 320,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    width: 300,
    borderColor: "blue",
    marginVertical: 32,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    paddingHorizontal: 8,
  },
});
