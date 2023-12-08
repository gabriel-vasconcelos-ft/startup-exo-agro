import React, { useState } from "react";
import styles from "./style";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function FinalizarVisita() {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.signSchedule}>
          <Text style={styles.textSchedule}>Finalizar Visita</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Selecionar visita" />
          <TextInput style={styles.input} placeholder="Horário de chegada" />
          <TextInput style={styles.input} placeholder="Horário de saída" />
          <TextInput style={styles.input} placeholder="Objetivo da visita" />
          <TextInput
            style={styles.input}
            placeholder="Diagnóstico (dropdown)"
          />
          <TextInput style={styles.input} placeholder="Nome da praga" />
          <TextInput style={styles.input} placeholder="Produto indicado" />
          <TextInput
            style={[styles.input, styles.inputObeservation]}
            multiline={true}
            placeholder="Observações..."
          />
          <TextInput style={styles.input} placeholder="Fotos" />
          <TextInput style={styles.input} placeholder="Tipos de plantio" />
        </View>
        <CheckBox
          title="Venda de produto"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />

        <View style={styles.flexButtons}>
          <TouchableOpacity
            style={[styles.button, styles.buttonColorCancel]}
            onPress={() => navigateToScreen("Home")}
          >
            <Text style={styles.buttonText}>Cancelar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonColorSave]}>
            <Text style={styles.buttonText}>Salvar </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
