import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
}
const DefaultRoundedButton = ({ text, onPress, backgroundColor }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress}
      style={[
        styles.roundedButton,
        { backgroundColor: backgroundColor || "red" },
      ]}
    >
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 25,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DefaultRoundedButton;
