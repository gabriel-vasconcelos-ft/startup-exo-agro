import React from "react";
import styles from "./style";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Header2 from "../../components/Header2";
import ButtonList from "../../components/ButtonList";
import { AntDesign } from "@expo/vector-icons";

export default function ListaCliente() {
  return (
    <View style={styles.container}>
      <Header2 />
      <View>
        <TextInput style={styles.input} placeholder="Pesquisar..." />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.list}>Lista de clientes</Text>
        <TouchableOpacity style={styles.buttonAdd}>
          <AntDesign name="plus" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
      <ButtonList />
    </View>
  );
}
