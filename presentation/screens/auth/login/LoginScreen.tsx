import { Text, View, Image, Alert } from "react-native";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";
import styles from "./Styles";
import { useState } from "react";
import EmailValidator from "../../../utils/EmailValidator";
import { ApiRequestHandler } from "../../../../data/sources/remote/api/ApiRequestHandler";
import { AuthResponse } from "../../../../domain/models/AuthResponse";
import { defaultErrorResponse, ErrorResponse } from "../../../../domain/models/ErrorResponse";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

export default function LoginScreen({ navigation, route }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
    if (email === "" || password === "") {
      Alert.alert("Error", "El correo y la contraseña son obligatorios");
      return;
    }
    // if (!EmailValidator(email)) {
    //   Alert.alert("Error", "El correo electronico no es valido");
    //   return;
    // }
    await login(email, password);
  };

  const login = async (email: string, password: string): Promise<AuthResponse | ErrorResponse> => {
    try {
      const response = await ApiRequestHandler.post<AuthResponse>('/auth/login', {
        email: email,
        password: password,
      });
      console.log('Respuesta del servidor', response.data);
      return response.data;
    } catch (error:any) {
      if(error.response){
      const errorData: ErrorResponse = error.response.data
      if (Array.isArray(errorData.message)) {
        console.error('Errores multiples del servidor', errorData.message.join(', '));
      }
      else {
        console.error('Error en el servidor', errorData.message);
      } 
      return errorData;   
      }
      else {
        console.error('Error en la peticion', error.message)
        return defaultErrorResponse;
      }
    }
  }

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
