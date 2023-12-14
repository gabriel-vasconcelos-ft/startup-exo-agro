import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { todosClientes } from "../../service/ClienteService";

import styles from "./style";

export default function ButtonList() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const carregarClientes = async () => {
      const response = await todosClientes();
      setClientes(response.clientes);
    };

    carregarClientes();
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
