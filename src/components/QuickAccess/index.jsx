import React from "react";
import styles from "./style";
import { Text, View, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function QuickAccess() {
	const buttonsData = [
		{ name: "Visita", icon: "solution1", text: "Agendar Visita" },
		{ name: "Historico", icon: "clockcircleo", text: "Histórico de Visitas" },
		{ name: "Cadastro", icon: "addusergroup", text: "Cadastro de Clientes" },
		{ name: "MinhaAgenda", icon: "profile", text: "Minha Agenda" },
		{ name: "Lista", icon: "contacts", text: "Lista de Clientes" },
		{ name: "Central", icon: "message1", text: "Ajuda e Suporte" },
	];

	const navigation = useNavigation();

	const handleEmailPress = () => {
		Linking.openURL("mailto:suporte@exoagro.com.br");
	};

	const handleButtonPress = (buttonName) => {
		if (buttonName === "Visita") {
			navigation.navigate("AgendarVisita");
		} else if (buttonName === "Historico") {
			navigation.navigate("HistoricoVisita");
		} else if (buttonName === "Cadastro") {
			navigation.navigate("CadastroCliente");
		} else if (buttonName === "Lista") {
			navigation.navigate("ListaCliente");
		} else if (buttonName === "Central") {
			handleEmailPress();
		} else if (buttonName === "MinhaAgenda") {
			navigation.navigate("MinhaAgenda");
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
