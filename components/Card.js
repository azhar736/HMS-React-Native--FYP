import { StyleSheet, Text, View } from "react-native";

const Card = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <View>
          <Text>Image</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.headingLeft}>Heading Text</Text>
          </View>
          <View>
            <Text style={styles.headingRight}>$50</Text>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.textLeft}>City name</Text>
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
    </View>
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
