import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import axios from "axios";
import {
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";

import Header from "../../components/Header";

import styles from "./style";

export default function FinalizarVisita() {
	const navigation = useNavigation();
	const route = useRoute();

	const { objectVisit } = route.params;

	const navigateToScreen = (screen) => {
		navigation.navigate(screen);
	};

	const [successMessage, setSuccessMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const [goal, setGoal] = useState(objectVisit.goal);
	const [diagnosis, setDiagnosis] = useState("Milho mofando");
	const [pest, setPest] = useState("Nenhuma encontrada");
	const [product, setProduct] = useState("Produto para milho");
	const [observations, setObservations] = useState("Milho mofando");
	const [planting, setPlanting] = useState("Milho");
	const [status, setStatus] = useState("done");
	const [date, setDate] = useState(objectVisit.date);
	const [arrival, setArrival] = useState(objectVisit.arrival);
	const [exit, setExit] = useState(objectVisit.exit);

	const saveVisit = async () => {
		try {
			const formData = new FormData();

			formData.append("goal", goal);
			formData.append("diagnosis", diagnosis);
			formData.append("pest", pest);
			formData.append("product", product);
			formData.append("observations", observations);
			formData.append("planting", planting);
			formData.append("status", status);
			formData.append("date", date);
			formData.append("arrival", arrival);
			formData.append("exit", exit);
			formData.append("client_id", objectVisit.clientId);
			formData.append("agronomist_id", objectVisit.agronomistId);

			console.log(formData);

			const response = await axios.put(
				`http://10.0.0.106:8080/visit/${objectVisit.visitId}`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 200 || response.status === 201) {
				setSuccessMessage("Visita finalizada com sucesso");
				setTimeout(() => {
					setSuccessMessage("");
				}, 3000);
				setErrorMessage("");
				setUpdateScreen(true);
				navigation.navigate("MinhaAgenda");
			}
		} catch (error) {
			setErrorMessage(
				error.response.data.message || "Erro desconhecido ao finalizar visita"
			);
			setTimeout(() => {
				setErrorMessage("");
			}, 3000);
			setSuccessMessage("");
		}
	};

	return (
		<View style={styles.container}>
			<Header />

			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.signSchedule}>
					<Text style={styles.textSchedule}>Realizar Visita</Text>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder={"Objetivo da visita"}
						value={goal}
						onChangeText={(text) => setGoal(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder="Diagnóstico"
						value={diagnosis}
						onChangeText={(text) => setDiagnosis(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder="Praga"
						value={pest}
						onChangeText={(text) => setPest(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder="Produto"
						value={product}
						onChangeText={(text) => setProduct(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder="Observações"
						value={observations}
						onChangeText={(text) => setObservations(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder="Plantio"
						value={planting}
						onChangeText={(text) => setPlanting(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder="Status"
						value={status}
						onChangeText={(text) => setStatus(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder={"Data da visita"}
						value={date}
						onChangeText={(text) => setDate(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder={"Horário de chegada"}
						value={arrival}
						onChangeText={(text) => setArrival(text)}
					/>
				</View>

				<View style={styles.input}>
					<TextInput
						placeholder={"Horario de saída"}
						value={exit}
						onChangeText={(text) => setExit(text)}
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
