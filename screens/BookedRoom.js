import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const BookedRoom = () => {
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
        <PrimaryButton buttonText="Booked Now" />
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
