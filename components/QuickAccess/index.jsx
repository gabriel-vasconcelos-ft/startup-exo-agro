import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function QuickAccess() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);

    setTimeout(() => {
      setActiveButton(null);
    }, 150);
  };
  return (
    <View style={styles.flexButtons}>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === "Visita" && { backgroundColor: "#5FBF3E" },
        ]}
        onPress={() => handleButtonPress("Visita")}
      >
        <AntDesign
          name="solution1"
          style={[
            styles.buttonIcon,
            activeButton === "Visita" && { color: "#fff" },
          ]}
        />
        <Text
          style={[
            styles.buttonText,
            activeButton === "Visita" && { color: "#fff" },
          ]}
        >
          Agendar Visita
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === "Historico" && { backgroundColor: "#5FBF3E" },
        ]}
        onPress={() => handleButtonPress("Historico")}
      >
        <AntDesign
          name="clockcircleo"
          style={[
            styles.buttonIcon,
            activeButton === "Historico" && { color: "#fff" },
          ]}
        />
        <Text
          style={[
            styles.buttonText,
            activeButton === "Historico" && { color: "#fff" },
          ]}
        >
          Histórico de Visitas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === "Cadastro" && { backgroundColor: "#5FBF3E" },
        ]}
        onPress={() => handleButtonPress("Cadastro")}
      >
        <AntDesign
          name="addusergroup"
          style={[
            styles.buttonIcon,
            activeButton === "Cadastro" && { color: "#fff" },
          ]}
        />
        <Text
          style={[
            styles.buttonText,
            activeButton === "Cadastro" && { color: "#fff" },
          ]}
        >
          Cadastro de Clientes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === "Agenda" && { backgroundColor: "#5FBF3E" },
        ]}
        onPress={() => handleButtonPress("Agenda")}
      >
        <AntDesign
          name="profile"
          style={[
            styles.buttonIcon,
            activeButton === "Agenda" && { color: "#fff" },
          ]}
        />
        <Text
          style={[
            styles.buttonText,
            activeButton === "Agenda" && { color: "#fff" },
          ]}
        >
          Minha Agenda
        </Text>
      </TouchableOpacity>
    </View>
  );
}
