import {
  Text,
  View,
  Image,
} from "react-native";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";
import styles from "./Styles";

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
