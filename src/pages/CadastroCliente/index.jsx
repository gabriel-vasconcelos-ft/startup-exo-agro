import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

import Header from "../../components/Header";

import styles from "./style";

export default function CadastroCliente() {
	const navigation = useNavigation();

	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const [name, setName] = useState("rubens lima lima");
	const [phone, setPhone] = useState("32165498731");
	const [email, setEmail] = useState("rubens011@gmail.com");
	const [password, setPassword] = useState("123456");
	const [gender, setGender] = useState("mm");
	const [cpf, setCpf] = useState("32165498731");
	const [birth, setBirth] = useState("1999-12-12");
	const [road, setRoad] = useState("rua 1");
	const [neighborhood, setNeighborhood] = useState("bairro 1");
	const [city, setCity] = useState("cidade 1");
	const [area, setArea] = useState(10);
	const [cultivation, setCultivation] = useState("cultivo 1");
	const [problem, setProblem] = useState("problema 1");
	const [notification, setNotification] = useState("email");

	const uploadImage = async () => {
		try {
			const formData = new FormData();

			formData.append("name", name);
			formData.append("phone", phone);
			formData.append("email", email);
			formData.append("password", password);
			formData.append("gender", gender);
			formData.append("cpf", cpf);
			formData.append("birth", birth);
			formData.append("road", road);
			formData.append("neighborhood", neighborhood);
			formData.append("city", city);
			formData.append("area", area);
			formData.append("cultivation", cultivation);
			formData.append("problem", problem);
			formData.append("notification", notification);

			const response = await axios.post(
				"http://10.0.0.106:8080/client",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 200 || response.status === 201) {
				setSuccessMessage("Cliente cadastrado com sucesso");
				setTimeout(() => {
					setSuccessMessage("");
				}, 3000);
				setErrorMessage("");
				navigation.navigate("ListaCliente");
			}

			console.log(formData);
			console.log(response.data);
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
					<Text style={styles.label}>Nome</Text>
					<TextInput
						style={styles.input}
						placeholder="Nome completo"
						value={name}
						onChangeText={(text) => setName(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Telefone</Text>
					<TextInput
						style={styles.input}
						placeholder="XX XXXXX-XXXX"
						value={phone}
						onChangeText={(text) => setPhone(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>E-mail</Text>
					<TextInput
						style={styles.input}
						placeholder="Ex: name32@gmail.com"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Senha</Text>
					<TextInput
						style={styles.input}
						placeholder="***"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Gênero</Text>
					<Picker
						style={styles.input}
						gender={gender}
						onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
					>
						<Picker.Item label="Homem Cis" value="mm" />
						<Picker.Item label="Homem trans" value="mf" />
						<Picker.Item label="Mulher Cis" value="ff" />
						<Picker.Item label="Mulher trans" value="fm" />
						<Picker.Item label="Outro" value="o" />
					</Picker>
				</View>

				<View>
					<Text style={styles.label}>CPF</Text>
					<TextInput
						style={styles.input}
						placeholder="XXX.XXX.XXX-XX"
						value={cpf}
						onChangeText={(text) => setCpf(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Data de nascimento</Text>
					<TextInput
						style={styles.input}
						placeholder="XXXX-XX-XX"
						value={birth}
						onChangeText={(text) => setBirth(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Endereço</Text>
					<TextInput
						style={styles.input}
						placeholder="Informe o endereço"
						value={road}
						onChangeText={(text) => setRoad(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Bairro</Text>
					<TextInput
						style={styles.input}
						placeholder="Informe o bairro"
						value={neighborhood}
						onChangeText={(text) => setNeighborhood(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Cidade</Text>
					<TextInput
						style={styles.input}
						placeholder="Informe a cidade"
						value={city}
						onChangeText={(text) => setCity(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Área</Text>
					<TextInput
						style={styles.input}
						placeholder="Ex: 25"
						value={area}
						keyboardType="numeric"
						onChangeText={(number) => Number(setArea(number))}
					/>
				</View>

				<View>
					<Text style={styles.label}>Cultivo</Text>
					<TextInput
						style={styles.input}
						placeholder="Quais cultivos você tem? "
						value={cultivation}
						onChangeText={(text) => setCultivation(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Problema</Text>
					<TextInput
						style={styles.input}
						placeholder="Quais problemas você está enfrentando?"
						value={problem}
						onChangeText={(text) => setProblem(text)}
					/>
				</View>

				<View>
					<Text style={styles.label}>Notificação</Text>
					<Picker
						style={styles.input}
						notification={notification}
						onValueChange={(itemValue, itemIndex) => setNotification(itemValue)}
					>
						<Picker.Item label="E-mail" value={"email"} />
						<Picker.Item label="WhatsApp" value={"whatsapp"} />
					</Picker>
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
						onPress={uploadImage}
					>
						<Text style={styles.buttonText}>Salvar </Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}
