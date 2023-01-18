import { Image, StyleSheet, Text, View } from "react-native";
const URL = "https://github.com/azhar736/FYP-Images/blob/main/Challan.png";
const AllBill = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.Container}>
        <View style={styles.textContainer}>
          <View>
            {/*user id */}
            <Text style={styles.text}>01</Text>
          </View>
          <View>
            {/*User name */}
            <Text style={styles.text}>Azhar</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          {/*Picture... */}
          <Image
            style={styles.image}
            source={{
              uri:
                "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics2.png",
            }}
          />
        </View>
      </View>
      <View style={styles.Container}>
        <View style={styles.textContainer}>
          <View>
            {/*user id */}
            <Text style={styles.text}>02</Text>
          </View>
          <View>
            {/*User name */}
            <Text style={styles.text}>Uzair</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          {/*Picture... */}
          <Image
            style={styles.image}
            source={{
              uri:
                "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics2.png",
            }}
          />
        </View>
      </View>
      <View style={styles.Container}>
        <View style={styles.textContainer}>
          <View>
            {/*user id */}
            <Text style={styles.text}>03</Text>
          </View>
          <View>
            {/*User name */}
            <Text style={styles.text}>Hammad</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          {/*Picture... */}
          <Image
            style={styles.image}
            source={{
              uri:
                "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics2.png",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AllBill;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  Container: {
    flexDirection: "row",
    width: "70%",
    marginVertical: 20,
  },
  textContainer: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 4,
  },
  imageContainer: {
    height: 150,
    width: "80%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
