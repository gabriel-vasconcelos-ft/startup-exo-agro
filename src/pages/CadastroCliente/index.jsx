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
import RNPickerSelect from "react-native-picker-select";

export default function CadastroCliente() {
  const [dropdown, setDropdown] = useState("");

  const options = [
    { label: "Maculino", value: "masculino" },
    { label: "Feminino", value: "feminino" },
    { label: "Outro", value: "outro" },
  ];

  return (
    <View>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.signUpClient}>
          <Text style={styles.textSignUpClient}>Cadastro de Cliente</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Nome Completo" />
          <TextInput
            style={styles.input}
            placeholder="Data de nascimento"
            keyboardType="numeric"
          />
          <View style={styles.dropdown}>
            <RNPickerSelect
              placeholder={{ label: "Gênero", value: null }}
              items={options}
              onValueChange={(value) => setDropdown(value)}
              value={dropdown}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="phone-pad"
          />
          <TextInput style={styles.input} placeholder="Endereço" />
          <TextInput
            style={styles.input}
            placeholder="Tamanho da propriedade em m²"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Tipo de cultivo principal"
          />
          <TextInput style={styles.input} placeholder="Histórico de cultivo" />
          <TextInput style={styles.input} placeholder="Meta de produção" />
          <TextInput style={styles.input} placeholder="Problemas específicos" />
          <TextInput
            style={styles.input}
            placeholder="Consultoria ou assistência tec."
          />
          <TextInput
            style={styles.input}
            placeholder="Preferência de notificação"
          />
        </View>
        <View style={styles.flexButtons}>
          <TouchableOpacity style={[styles.button, styles.buttonColorCancel]}>
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
