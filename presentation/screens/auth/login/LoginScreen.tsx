import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}
export default function LoginScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/city.jpg")}
      />

      <View style={styles.form}>
        <Image
          source={require("../../../../assets/user.png")}
          style={styles.imageUser}
        />
        <Text style={styles.textLogin}>LOGIN</Text>

        <DefaultTextInput
          icon={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          onChangeText={(text) => {}}
          value=""
          keyboardType="email-address"
        />

        <DefaultTextInput
          icon={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          onChangeText={(text) => {}}
          value=""
          secureTextEntry={true}
        />

        <DefaultRoundedButton text="INICIAR SESION" onPress={() => {}} />

        <View style={styles.containerTextDontHaveAccount}>
          <Text style={styles.textDontHaveAccount}>No tienes cuenta?</Text>
        </View>

        <DefaultRoundedButton
          text="REGISTRATE"
          onPress={() => navigation.navigate("RegisterScreen")}
          backgroundColor="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },
  form: {
    width: "87%",
    height: "75%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 40,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  imageUser: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 15,
  },
  textLogin: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },

  containerTextDontHaveAccount: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textDontHaveAccount: {
    color: "white",
    fontSize: 18,
  },
});
