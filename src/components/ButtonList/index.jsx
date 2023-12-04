import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import axios from "axios";

import styles from "./style";

export default function ButtonList() {
  const baseApi = "http://10.0.0.105:8080";

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseApi}/clientes`)
      .then((response) => setClientes(response.data.clientes))
      .catch((error) => console.error("Erro ao realizar requisição: ", error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        // ? keyExtractor={({ id }, index) => id}
        keyExtractor={(item) => item.usuario.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText} key={item.usuario.id}>
                {item.usuario["nome"]}
              </Text>
              <AntDesign name="export" style={styles.buttonIcon} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
