import { Text, View, Image, Alert } from "react-native";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";
import styles from "./Styles";
import { useState } from "react";
import EmailValidator from "../../../utils/EmailValidator";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

export default function LoginScreen({ navigation, route }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "El correo y la contraseña son obligatorios");
      return;
    }
    if (!EmailValidator(email)) {
      Alert.alert("Error", "El correo electronico no es valido");
      return;
    }
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

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
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <DefaultTextInput
          icon={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

        <DefaultRoundedButton
          text="INICIAR SESION"
          onPress={() => {
            handleLogin();
          }}
        />

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
