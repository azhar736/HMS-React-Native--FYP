import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ onTap, buttonText }) => {
  return (
    <Pressable
      onPress={onTap}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
    >
      <View>
        <Text style={styles.title}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    borderWidth: 2,
    width: 250,
    borderColor: "#11baa9",
    borderRadius: 24,
    backgroundColor: "#24edd9",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
