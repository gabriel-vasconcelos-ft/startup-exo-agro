import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import styles from "./style";

export default function Login() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const data = {};

  const handleSubmit = async () => {
    try {
      data.email = email;
      data.password = password;

      const response = await axios.post("http://20.20.17.141:8080/login", data);

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Cliente cadastrado com sucesso");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        setErrorMessage("");
        navigation.navigate("Home");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        setSuccessMessage("");
      }
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const imageSize = keyboardVisible ? 125 : 170;
  const textSize = keyboardVisible ? 20 : 35;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image style={[styles.image, { width: imageSize, height: imageSize }]} source={require("../../img/boi.png")} />
          <Text style={[styles.titulo, { fontSize: textSize }]}>Exo Agro</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={styles.placeholderText.color}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={styles.placeholderText.color}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar </Text>
        </TouchableOpacity>

        <View style={{ width: "100%" }}>
          {successMessage ? (
            <Text style={styles.boxMessageSuccess}>{successMessage}</Text>
          ) : null}

          {errorMessage ? (
            <Text style={styles.boxMessageErro}>{errorMessage}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
}
