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
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg",
  ];
  return <ImageSlider style={styles.imageContainer} images={images}
  customSlide={({ index, item, style, width }) => (
    // It's important to put style here because it's got offset inside
    <View key={index} style={[style, styles.customSlide]}>
      <Image source={{ uri: item }} style={styles.customImage} width={width}/>
    </View>
  )}
  />;
};

export default Slider;

const styles = StyleSheet.create({
  imageContainer: {
  borderRadius:8,
    width:300,
    marginHorizontal:"auto"
  },
  customSlide:{
    height:300,
    width:300,
    borderRadius:8,

  },
  customImage:{
   height:"100%",
   width:300,
   borderRadius:8,
}
});
