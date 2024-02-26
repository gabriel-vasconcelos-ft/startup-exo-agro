import React, { useEffect, useState } from "react";
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

  const imageSize = keyboardVisible ? 120 : 170;
  const textSize = keyboardVisible ? 20 : 33;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={[styles.image, { width: imageSize, height: imageSize }]}
            source={require("../../img/boi.png")}
          />
          <Text style={[styles.titulo, { fontSize: textSize }]}>Exo Agro</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={styles.placeholderText.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={styles.placeholderText.color}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
