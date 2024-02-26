import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/core";

import styles from "./style";

import * as Print from "expo-print";

const htmlTemplate = (name, email) => {
  return `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <style>
      h1 {
        color: lim
      }
    </style>
    <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
        ${name}
      </h1>
      <h2>${email}</h2>
      <img
        src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
        style="width: 90vw;" />
    </body>
  </html>
  `;
};

export default function PDF() {
  const navigation = useNavigation();

  const print = async () => {
    // On android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: htmlTemplate(name, email),
    });
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCpf] = useState("");
  const [birth, setBirth] = useState("");
  const [road, setRoad] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [cultivation, setCultivation] = useState("");
  const [problem, setProblem] = useState("");
  const [notification, setNotification] = useState("");

  const [goal, setGoal] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [pest, setPest] = useState("");
  const [product, setProduct] = useState("");
  const [observations, setObservations] = useState("");
  const [planting, setPlanting] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [arrival, setArrival] = useState("");
  const [exit, setExit] = useState("");

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Exo Agro</Text>
        </View>
        <View>
          <Image style={styles.image} source={require("../../img/boi.png")} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.signUpClient}>
          <Text style={styles.textSignUpClient}>Relatório de Visita</Text>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Gênero</Text>
            <Picker
              style={styles.input}
              gender={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Homem Cis" value="mm" />
              <Picker.Item label="Homem trans" value="mf" />
              <Picker.Item label="Mulher Cis" value="ff" />
              <Picker.Item label="Mulher trans" value="fm" />
              <Picker.Item label="Outro" value="o" />
            </Picker>
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={(text) => setCpf(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput
              style={styles.input}
              value={birth}
              onChangeText={(text) => setBirth(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Endereço</Text>
            <TextInput
              style={styles.input}
              value={road}
              onChangeText={(text) => setRoad(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Bairro</Text>
            <TextInput
              style={styles.input}
              value={neighborhood}
              onChangeText={(text) => setNeighborhood(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={(text) => setCity(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Área</Text>
            <TextInput
              style={styles.input}
              value={area}
              keyboardType="numeric"
              onChangeText={(number) => Number(setArea(number))}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Cultivo</Text>
            <TextInput
              style={styles.input}
              value={cultivation}
              onChangeText={(text) => setCultivation(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Problema</Text>
            <TextInput
              style={styles.input}
              value={problem}
              onChangeText={(text) => setProblem(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Notificação</Text>
            <Picker
              style={styles.input}
              notification={notification}
              onValueChange={(itemValue) => setNotification(itemValue)}
            >
              <Picker.Item label="E-mail" value={"email"} />
              <Picker.Item label="WhatsApp" value={"whatsapp"} />
            </Picker>
          </View>

          <View>
            <Text style={styles.label}>Objetivo da visita</Text>
            <TextInput
              style={styles.input}
              value={goal}
              onChangeText={(text) => setGoal(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Diagnóstico</Text>
            <TextInput
              style={styles.input}
              value={diagnosis}
              onChangeText={(text) => setDiagnosis(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Praga</Text>
            <TextInput
              style={styles.input}
              value={pest}
              onChangeText={(text) => setPest(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Produto</Text>
            <TextInput
              style={styles.input}
              value={product}
              onChangeText={(text) => setProduct(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Observações</Text>
            <TextInput
              style={styles.input}
              value={observations}
              onChangeText={(text) => setObservations(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Plantio</Text>
            <TextInput
              style={styles.input}
              value={planting}
              onChangeText={(text) => setPlanting(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Status</Text>
            <TextInput
              style={styles.input}
              value={status}
              onChangeText={(text) => setStatus(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Data da visita</Text>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={(text) => setDate(text)}
            />
          </View>

          <View>
            <Text style={styles.label}>Horário de chegada</Text>
            <TextInput
              style={styles.input}
              value={arrival}
              onChangeText={(text) => setArrival(text)}
            />
          </View>
        </View>

        <View style={styles.flexColuna}>
          <View>
            <Text style={styles.label}>Horario de saída</Text>
            <TextInput
              style={styles.input}
              value={exit}
              onChangeText={(text) => setExit(text)}
            />
          </View>
        </View>

        <View style={styles.flexButtons}>
          <TouchableOpacity
            style={[styles.button, styles.buttonColorCancel]}
            onPress={() => navigateToScreen("Home")}
          >
            <Text style={styles.buttonText}>Cancelar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonColorPrint]}
            onPress={print}
          >
            <Text style={styles.buttonText}>Gerar PDF </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
