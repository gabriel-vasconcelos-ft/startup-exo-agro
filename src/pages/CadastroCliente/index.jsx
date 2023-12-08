import React, { useState } from "react";
import styles from "./style";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
import Header from "../../components/Header";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/core";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CadastroCliente() {
  const [dropdown, setDropdown] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatepicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatepicker();
    }
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  const options = [
    { label: "Maculino", value: "masculino" },
    { label: "Feminino", value: "feminino" },
    { label: "Outro", value: "outro" },
  ];

  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };


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
          <View>
            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                maximumDate={new Date("2006-01-01")}
                minimumDate={new Date("1933-01-01")}
              />
            )}

            {!showPicker && (
              <Pressable onPress={toggleDatepicker}>
                <TextInput
                  style={[styles.input]}
                  placeholder="Data de Nascimento"
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                  editable={false}
                />
              </Pressable>
            )}
          </View>
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
