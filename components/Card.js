import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Card = ({ title, description, price, image, _id }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("RoomDetails", { roomId: _id })}
      style={styles.rootContainer}
    >
      <View style={styles.imageContainer}>
        <View>
          <Text>Image</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.headingLeft}>{title}</Text>
          </View>
          <View>
            <Text style={styles.headingRight}>${price}</Text>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.textLeft}>city</Text>
          </View>
          <View>
            <Text style={styles.textRight}>/Month</Text>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.textLeft}>4.8(4000 reviews)</Text>
          </View>
          <View>
            <Text style={styles.textRight}>Save</Text>
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
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "blue",
  },
  imageContainer: {
    backgroundColor: "#50f2ad",
    height: 70,
    width: 70,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingHorizontal: 10,
    width: 200,
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
  },
  headingRight: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#50f2ad",
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
