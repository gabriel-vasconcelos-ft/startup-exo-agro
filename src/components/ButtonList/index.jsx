import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { todosClientes } from "../../service/ClienteService.js";

import styles from "./style";

export default function ButtonList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const carregandoClientes = async () => {
      const response = await todosClientes();
      setClientes(response.clientes);
    };
    carregandoClientes();
  }, []);

  return (
    <View style={styles.container}>
      {/* {clientes.map((cliente) => (
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText} key={cliente.usuario.id}>
              {cliente.usuario["nome"]}
            </Text>
            <AntDesign name="export" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
      ))} */}

      <FlatList
        data={clientes}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button}>
            {" "}
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText} key={item.usuario.id}>
                {item.usuario["nome"]}
              </Text>
              <AntDesign name="export" style={styles.buttonIcon} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.usuario.id}
      />
    </View>
  );
}
