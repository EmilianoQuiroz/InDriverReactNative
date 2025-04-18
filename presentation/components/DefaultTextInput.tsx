import { Image, KeyboardType, StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardType;
  icon: any;
  secureTextEntry?: boolean;
}

const DefaultTextInput = ({
  placeholder,
  icon,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}: Props) => {
  return (
    <View style={styles.containerTextInput}>
      <Image source={icon} style={styles.textInputIcon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#fff"
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        keyboardType={keyboardType || "default"}
        secureTextEntry={secureTextEntry || false}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    width: "90%",
    height: 50,
    borderBottomColor: "#fff",
    color: "#fff",
    fontSize: 18,
  },
  containerTextInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textInputIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
});

export default DefaultTextInput;
