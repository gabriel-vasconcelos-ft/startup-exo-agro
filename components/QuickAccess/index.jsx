import React from "react";
import styles from "./style";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function QuickAccess() {
  const buttonsData = [
    { name: "Visita", icon: "solution1", text: "Agendar Visita" },
    { name: "Historico", icon: "clockcircleo", text: "Histórico de Visitas" },
    { name: "Cadastro", icon: "addusergroup", text: "Cadastro de Clientes" },
    { name: "Agenda", icon: "profile", text: "Minha Agenda" },
  ];

  const navigation = useNavigation();

  const handleButtonPress = (buttonName) => {
    if (buttonName === "Visita") {
      navigation.navigate("AgendarVisita");
    }
    if (buttonName === "Historico") {
      navigation.navigate("HistoricoVisita");
    }
    if (buttonName === "Cadastro") {
      navigation.navigate("CadastroCliente");
    }
  };

  return (
    <View style={styles.containerButtons}>
      {buttonsData.map((button) => (
        <TouchableOpacity
          key={button.name}
          style={styles.button}
          onPress={() => handleButtonPress(button.name)}
        >
          <AntDesign name={button.icon} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>{button.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
