import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import axios from "axios";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import styles from "./style";

export default function Login() {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const data = {};

	const handleSubmit = async () => {
		try {
			data.email = email;
			data.password = password;

			const response = await axios.post("http://10.0.0.106:8080/login", data);

			if (response.status === 200 || response.status === 201) {
				setSuccessMessage("Cliente cadastrado com sucesso");
				setTimeout(() => {
					setSuccessMessage("");
				}, 3000);
				setErrorMessage("");
				navigation.navigate("Home");
			}
		} catch (error) {
			if (error.response) {
				setErrorMessage(error.response.data.message);
				setTimeout(() => {
					setErrorMessage("");
				}, 3000);
				setSuccessMessage("");
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<Image style={styles.image} source={require("../../img/boi.png")} />
					<Text style={styles.titulo}>Exo Agro</Text>
				</View>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					placeholderTextColor={styles.placeholderText.color}
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Senha"
					placeholderTextColor={styles.placeholderText.color}
					onChangeText={(text) => setPassword(text)}
				/>

				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Entrar </Text>
				</TouchableOpacity>

				<View style={{ width: "100%" }}>
					{successMessage ? (
						<Text style={styles.boxMessageSuccess}>{successMessage}</Text>
					) : null}

					{errorMessage ? (
						<Text style={styles.boxMessageErro}>{errorMessage}</Text>
					) : null}
				</View>
			</View>
		</View>
	);
}
