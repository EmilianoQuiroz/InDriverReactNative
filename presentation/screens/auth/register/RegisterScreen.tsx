import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import styles from "./Styles";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";

interface Props extends NativeStackScreenProps<RootStackParamList, "RegisterScreen"> {}
export default function RegisterScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/city.jpg")}
        style={styles.imageBackground}
      />

      <View style={styles.form}>
        <TouchableOpacity             
          onPress={() => navigation.pop()}
        >
          <Image
            style={styles.backArrow}
            source={require("../../../../assets/left_arrow.png")}
          />
        </TouchableOpacity>
        <Image
          source={require("../../../../assets/user.png")}
          style={styles.userImage}
        />
        <Text style={styles.textRegister}>Registro</Text>
        <DefaultTextInput
          placeholder="Nombre"
          value=""
          onChangeText={(text) => {}}
          icon={require("../../../../assets/user.png")}
        />
        <DefaultTextInput
          placeholder="Apellido"
          value=""
          onChangeText={(text) => {}}
          icon={require("../../../../assets/user.png")}
        />
        <DefaultTextInput
          placeholder="Email"
          value=""
          onChangeText={(text) => {}}
          icon={require("../../../../assets/email.png")}
          keyboardType="email-address"
        />
        <DefaultTextInput
          placeholder="Telefono"
          value=""
          onChangeText={(text) => {}}
          keyboardType="numeric"
          icon={require("../../../../assets/phone.png")}
        />
        <DefaultTextInput
          placeholder="Contraseña"
          value=""
          onChangeText={(text) => {}}
          icon={require("../../../../assets/password.png")}
          secureTextEntry={true}
        />
        <DefaultTextInput
          placeholder="Confirmar Contraseña"
          value=""
          onChangeText={(text) => {}}
          icon={require("../../../../assets/password.png")}
          secureTextEntry={true}
        />

        <DefaultRoundedButton
          text="Registrarse"
          onPress={() => {}}
          backgroundColor="red"
        />
      </View>
    </View>
  );
}
