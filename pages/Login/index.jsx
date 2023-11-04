import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image style={styles.image} source={require("../../img/boi.png")} />
          <Text style={styles.titulo}>Exo Agro</Text>
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
