import React from "react";
import styles from "./style";
import { Text, View, TextInput } from "react-native";
import Header2 from "../../components/Header2";
import ButtonList from "../../components/ButtonList";

export default function HistoricoVisita() {
  return (
    <View style={styles.container}>
      <Header2 />
      <View>
        <TextInput style={styles.input} placeholder="Pesquisar..." />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.list}>Histórico de visitas</Text>
      </View>
      <ButtonList />
    </View>
  );
}
