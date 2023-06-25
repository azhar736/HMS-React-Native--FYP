import { useNavigation } from "@react-navigation/native";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import BASE_URL from "../config/env.config";
const Card = ({ title, description, price, image, _id,totalSeates,seatsRemaining }) => {
  console.log("The Props on Room card is::",description, price,image);
  const imagePathArray = image;
  const imagePath = imagePathArray[0];
  console.log("The image path is::",imagePath);
  const imageUrl = `${BASE_URL}${imagePath}`;
  console.log("The image url is::",imageUrl);
  const navigation = useNavigation();
  const bookedRoom=()=>{
    console.log("The Remaining Seats ISSSS",seatsRemaining);
    if(seatsRemaining>0){
      navigation.navigate("RoomDetails", { id: _id })
    }
    else{
      Alert.alert("This Room is already Booked");
    }
  }
  return (
    <Pressable
      onPress={bookedRoom}
      style={styles.rootContainer}
    >
      <View style={styles.imageContainer}>
        <Image style={{height:"100%",width:"100%",borderRadius: 20}} source={{uri:imageUrl}} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.headingLeft}>{title}</Text>
          </View>
          <View>
            <Text style={styles.headingRight}>RS:{price}</Text>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.textLeft}>Total Seats</Text>
          </View>
          <View>
            <Text style={styles.textRight}>{totalSeates}</Text>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.textLeft}>Remaining Seats</Text>
          </View>
          <View>
            <Text style={styles.textRight}>{seatsRemaining}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "whitesmoke",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    flexDirection: "row",
    elevation:7,
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingHorizontal: 10,
    width: 240,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  headingLeft: {
    fontSize: 18,
    fontWeight: "bold",
    width:120,
  },
  headingRight: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#50f2ad",
    width:100,
  },
  textLeft: {
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
  },
  textRight: {
    fontSize: 12,
    color: "gray",
    fontWeight: "300",
  },
});
