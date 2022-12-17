import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ImageSlider from "react-native-image-slider";

const Slider = () => {
  const images = [
    "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics2.png",
    "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics3.jpg",
    "http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics4.png",
  ];
  return <ImageSlider style={styles.imageContainer} images={images} />;
};

export default Slider;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 8,
  },
});
