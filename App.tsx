import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import DefaultRoundedButton from "./presentation/components/DefaultRoundedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("./assets/city.jpg")}
      />
      <View style={styles.form}>
        <Image style={styles.imageUser} source={require("./assets/user.png")} />
        <Text style={styles.textLogin}>Login</Text>
        <View style={styles.containerTextInput}>
          <Image
            source={require("./assets/email.png")}
            style={styles.textInputIcon}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#fff"
            style={styles.textInput}
          />
        </View>
        <View style={styles.containerTextInput}>
          <Image
            source={require("./assets/password.png")}
            style={styles.textInputIcon}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#fff"
            style={styles.textInput}
          />
        </View>
        <DefaultRoundedButton
          text="Iniciar sesion"
          onPress={() => {}}
          backgroundColor="red"
        />
        <View style={styles.containerTextDontHaveAccount}>
          <Text style={styles.textDontHaveAccount}>¿No tienes cuenta?</Text>
        </View>
        <DefaultRoundedButton
          text="Registrate"
          onPress={() => {}}
          backgroundColor="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  form: {
    width: "85%",
    height: "80%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 40,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  imageUser: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  textLogin: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    width: "90%",
    height: 50,
    borderBottomColor: "#fff",
    color: "#fff",
    fontSize: 18,
  },
  textDontHaveAccount: {
    color: "#fff",
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
  containerTextDontHaveAccount: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  }
});
