import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Category from "../components/Category";
import Card from "../components/Card";
import Slider from "../components/Slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../env.config";
const Home = ({ navigation, route }) => {
  const [showRoom, setShowRoom] = useState(false);
  const [Rooms, setRooms] = useState([]);
  const fetchUsers = async () => {
    try {
      const fetchedUser = await axios.post(`${BASE_URL}singleUser`, {
        id: route.params.id,
      });
      const response = await fetchedUser.data;
      if (response?.data?.roomId?.length > 0) {
        navigation.replace("UserDashboard");
      } else {
        setShowRoom(true);
      }
      return response.data;
    } catch (error) {
      console.log("error ", error.message);
    }
  };
  const getAllRooms = async () => {
    const response = await axios.get(`${BASE_URL}allRooms`);
    const data1 = response.data;
    setRooms(data1.data);
  };
  useEffect(() => {
    fetchUsers();
    getAllRooms();
  }, [route]);
  useEffect(() => {
    fetchUsers();
    getAllRooms();
  }, []);
  return (
    <>
      {showRoom && (
        <ScrollView style={styles.rootContainer}>
          <View style={styles.topBarContainer}>
            <View>
              <Text>Logo</Text>
            </View>
            <View>
              <Text>
                <AntDesign name="bells" size={24} color="black" />
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Hello, Azhar</Text>
          </View>
          <View style={styles.formContainer}>
            <FontAwesome name="search" size={24} color="lightgray" />
            <TextInput
              keyboardType="default"
              placeholder="Search"
              style={styles.input}
            />
          </View>
          <View style={styles.categoryContainer}>
            <Category
              Title="Recomended"
              style={styles.category}
              isActive={true}
            />
            <Category
              Title="Popular"
              style={styles.category}
              isActive={false}
            />
            <Category
              Title="Trending"
              style={styles.category}
              isActive={false}
            />
          </View>
          <View style={styles.container}>
            <Slider />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.leftText}>Recently Booked</Text>
            </View>
            <View>
              <Text style={styles.textRight}>See All</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            {Rooms?.map((Room) => (
              <Card key={Room._id} {...Room} />
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 50,
    marginHorizontal: 20,
  },
  topBarContainer: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    textAlign: "left",
  },
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    paddingLeft: 20,
    padding: 4,
    borderWidth: 2,
    backgroundColor: "#defff1",
    borderColor: "#58fcb9",
    borderRadius: 8,
  },
  input: {
    paddingVertical: 2,
    marginVertical: 4,
    marginLeft: 8,
  },
  categoryContainer: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    backgroundColor: "#50f2ad",
  },
  container: {
    backgroundColor: "#50f2ad",
    marginHorizontal: 20,
    marginVertical: 20,
    height: 300,
    borderRadius: 30,
    justifyContent: "space-between",
  },
  ratingContainer: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "whitesmoke",
    paddingVertical: 2,
    borderRadius: 16,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingBox: {
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 20,
  },
  headingContainer: {
    borderWidth: 2,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  textContainer: {
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  textRight: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#50f2ad",
  },
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "red",
  },
});

{
  /* <View style={styles.ratingBox}>
<View style={styles.ratingContainer}>
  <Text>4.8</Text>
</View>
</View>
<View style={styles.headingContainer}>
<Text>Heading</Text>
<Text>Location</Text>
<Text>Price/PerNight</Text>
</View> */
}
