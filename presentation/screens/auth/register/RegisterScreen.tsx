import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./Styles";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";
import { useState } from "react";
import EmailValidator from "../../../utils/EmailValidator";

interface Props
  extends NativeStackScreenProps<RootStackParamList, "RegisterScreen"> {}

export default function RegisterScreen({ navigation, route }: Props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (name === "") {
      Alert.alert("Error", "El nombre es obligatorio");
      return;
    }
    if (lastName === "") {
      Alert.alert("Error", "El apellido es obligatorio");
      return;
    }
    if (email === "") {
      Alert.alert("Error", "El correo es obligatorio");
      return;
    }
    if (!EmailValidator(email)) {
      Alert.alert("Error", "El correo electronico no es valido");
      return;
    }
    if (phone === "") {
      Alert.alert("Error", "El telefono es obligatorio");
      return;
    }
    if (password === "") {
      Alert.alert("Error", "La contraseña es obligatoria");
      return;
    }
    if (confirmPassword === "") {
      Alert.alert("Error", "La confirmacion de la contraseña es obligatoria");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    return Alert.alert("Registro exitoso");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("../../../../assets/city.jpg")}
            style={styles.imageBackground}
          />

          <View style={styles.form}>
            <TouchableOpacity onPress={() => navigation.pop()}>
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
              value={name}
              onChangeText={setName}
              icon={require("../../../../assets/user.png")}
            />
            <DefaultTextInput
              placeholder="Apellido"
              value={lastName}
              onChangeText={setLastName}
              icon={require("../../../../assets/user.png")}
            />
            <DefaultTextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              icon={require("../../../../assets/email.png")}
              keyboardType="email-address"
            />
            <DefaultTextInput
              placeholder="Telefono"
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
              icon={require("../../../../assets/phone.png")}
            />
            <DefaultTextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              icon={require("../../../../assets/password.png")}
              secureTextEntry={true}
            />
            <DefaultTextInput
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              icon={require("../../../../assets/password.png")}
              secureTextEntry={true}
            />

            <DefaultRoundedButton
              text="Registrarse"
              onPress={() => {
                handleRegister();
              }}
              backgroundColor="red"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
