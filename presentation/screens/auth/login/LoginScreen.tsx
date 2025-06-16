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
import { LoginViewModel } from "./LoginViewModel";
import { LoginUseCase } from "../../../../domain/useCases/auth/LoginUseCase";
import { AuthService } from "../../../../data/sources/remote/services/AuthService";
import { AuthRepositoryImpl } from "../../../../data/repository/AuthRepositoryImpl";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

export default function LoginScreen({ navigation, route }: Props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authService = new AuthService()
  const authRepository = new AuthRepositoryImpl(authService);
  const loginUseCase = new LoginUseCase(authRepository);
  const loginViewModel = new LoginViewModel(loginUseCase);

  const handleLogin = async() => {
    if (email === "" || password === "") {
      Alert.alert("Error", "El correo y la contraseña son obligatorios");
      return;
    }
   if (!EmailValidator(email)) {
       Alert.alert("Error", "El correo electronico no es valido");
       return;
     }
    
    const response = await loginViewModel.login(email, password);

    console.log("Respuesta del login", response);
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
