import { Pressable, StyleSheet, Text, View } from "react-native";

const SecondryButton = ({ buttonText, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.rootContainer}
      android_ripple={{ color: "lightgray" }}
    >
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default SecondryButton;

const styles = StyleSheet.create({
  rootContainer: {
    borderWidth: 2,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#defff1",
    borderColor: "#58fcb9",
    marginVertical: 10,
  },
});
