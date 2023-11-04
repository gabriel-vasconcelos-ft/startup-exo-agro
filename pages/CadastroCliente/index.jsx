import { Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";

export default function CadastroCliente() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.signUpClient}>
          <Text style={styles.textSignUpClient}>Cadastro de Cliente</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Nome Completo" />
          <TextInput style={styles.input} placeholder="Data de nascimento" />
          <TextInput style={styles.input} placeholder="Gênero" />
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Telefone" />
          <TextInput style={styles.input} placeholder="Endereço" />
          <TextInput
            style={styles.input}
            placeholder="Tamanho da propriedade"
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
          <TextInput style={styles.input} placeholder="Senha" />
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

      <TabBar />
    </View>
  );
}
