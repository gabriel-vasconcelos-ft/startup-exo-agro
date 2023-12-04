import React from "react";
import styles from "./style";
import { Text, View, Image } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Exo Agro 1.0.0</Text>

          {/* <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/originals/1a/21/d0/1a21d0ddb331e396a3e9cc43765636cd.png",
            }}
          /> */}

        <Text style={styles.text}>
          <Text>Desenvolvido por: {"\n"}</Text>
          <Text>Rubens Lima {"\n"}</Text>
          <Text>Gabriel Vasconcelos {"\n"}</Text>
          <Text>Gabriel Henrique</Text>
        </Text>

        <Text style={[styles.text,styles.copy]}>Copyright 2023 &copy;</Text>
      </View>
    </View>
  );
}
