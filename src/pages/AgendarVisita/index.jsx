import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";

import Header from "../../components/Header";

import styles from "./style";

export default function AgendarVisita() {
	const navigation = useNavigation();

	const navigateToScreen = (screenName) => {
		navigation.navigate(screenName);
	};

	const [clients, setClients] = useState([]);
	const [clientId, setClientId] = useState(null);

	console.log(clientId);

	const [successMessage, setSuccessMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const [arrival, setArrival] = useState("2023-01-10");
	const [exit, setExit] = useState("2023-01-10");
	const [goal, setGoal] = useState("Verificar plantação");
	const [date, setDate] = useState("2023-01-10");

	const saveVisit = async () => {
		try {
			const formData = new FormData();

			// Dados mocados
			formData.append("client_id", clientId);
			formData.append("agronomist_id", "35381183-2f07-4b47-b6d1-92ccd74ed864");
			formData.append("status", "pending");
			formData.append("arrival", arrival);
			formData.append("exit", exit);
			formData.append("goal", goal);
			formData.append("date", date);

			const response = await axios.post(
				"http://10.0.0.106:8080/visit",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 200 || response.status === 201) {
				setSuccessMessage("Visita agendada com sucesso");
				setTimeout(() => {
					setSuccessMessage("");
				}, 3000);
				setErrorMessage("");
				navigate("MinhaAgenda");
			}
		} catch (error) {
			setErrorMessage(
				error.response.data.message || "Erro desconhecido ao salvar visita"
			);
			setTimeout(() => {
				setErrorMessage("");
			}, 3000);
			setSuccessMessage("");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://10.0.0.106:8080/client");
				console.log("Response received:", response);
				if (response && response.data) {
					setClients(response.data);
					console.log("Data received:", response.data);
				} else {
					console.log("Response or data undefined:", response);
				}
			} catch (error) {
				setErrorMessage(
					error.response.data.message ||
						"Erro desconhecido ao buscar lista de clientes"
				);
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const selecionarClient = (id) => {
		setClientId(id);
	};

	return (
		<View style={styles.container}>
			<Header />

			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.signSchedule}>
					<Text style={styles.textSchedule}>Agendar Visita</Text>
				</View>

				<View style={styles.input}>
					<RNPickerSelect
						placeholder={{ label: "Selecione um cliente", value: null }}
						onValueChange={(value) => selecionarClient(value)}
						items={clients.map((client) => ({
							label: client["User"].name,
							value: client.id,
						}))}
					/>
				</View>

				<View>
					<Text style={styles.label}>Horário de chegada</Text>
					<TextInput
						style={styles.input}
						placeholder="Horário de chegada"
						value={arrival}
						onChangeText={(text) => setArrival(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Horário de saída</Text>
					<TextInput
						style={styles.input}
						placeholder="Horário de saída"
						value={exit}
						onChangeText={(text) => setExit(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Data da visita</Text>
					<TextInput
						style={styles.input}
						placeholder="Data da visita"
						value={date}
						onChangeText={(text) => setDate(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Objetivo da visita</Text>
					<TextInput
						style={styles.input}
						placeholder="Objetivo da visita"
						value={goal}
						onChangeText={(text) => setGoal(text)}
					/>
				</View>

				<View style={{ width: "100%" }}>
					{successMessage ? (
						<Text style={styles.boxMessageSuccess}>{successMessage}</Text>
					) : null}

					{errorMessage ? (
						<Text style={styles.boxMessageErro}>{errorMessage}</Text>
					) : null}
				</View>

				<View style={styles.flexButtons}>
					<TouchableOpacity
						style={[styles.button, styles.buttonColorCancel]}
						onPress={() => navigateToScreen("Home")}
					>
						<Text style={styles.buttonText}>Cancelar </Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.button, styles.buttonColorSave]}
						onPress={saveVisit}
					>
						<Text style={styles.buttonText}>Salvar </Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}
