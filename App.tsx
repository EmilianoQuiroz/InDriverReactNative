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
        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.textButton}>Iniciar sesion</Text>
        </TouchableOpacity>
        <View style={styles.containerTextDontHaveAccount}>
          <Text style={styles.textDontHaveAccount}>¿No tienes cuenta?</Text>
        </View>
        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.textButton}>Registrate</Text>
        </TouchableOpacity>
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
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerTextDontHaveAccount: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  }
});
