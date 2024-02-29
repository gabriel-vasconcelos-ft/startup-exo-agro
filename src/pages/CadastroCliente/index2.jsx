import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
// import ImagePicker from "react-native-image-picker";

import Header from "../../components/Header";

import styles from "./style";

// name string
// phone string
// email string
// password string
// gender string
// cpf string
// birth string
// road string
// neighborhood string
// city string
// photo string
// area number
// cultivation string
// problem string
// notification boolean

const YourComponent = () => {
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
	// const [selectedImage, setSelectedImage] = useState(null);

	// const pickImage = () => {
	//   ImagePicker.launchImageLibrary((response) => {
	//     if (!response.didCancel && !response.error) {
	//       setSelectedImage(response);
	//     }
	//   });
	// };

	const uploadImage = async () => {
		try {
			const formData = new FormData();
			// formData.append("file", {
			//   uri: selectedImage.uri,
			//   type: selectedImage.type,
			//   name: selectedImage.fileName,
			// });
			// const formData = new FormData();
			// formData.append("file", {
			//   uri: "imageUri.png", // URI da imagem (pode ser um caminho local ou uma URL)
			//   type: "image/jpeg", // Tipo da imagem (ajuste conforme necessário)
			//   name: "myImage.jpg", // Nome da imagem (ajuste conforme necessário)
			// });

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
				"http://20.20.17.141:8080/client",
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

				<TextInput
					style={styles.input}
					placeholder="Nome completo"
					value={name}
					onChangeText={(text) => setName(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Telefone"
					value={phone}
					onChangeText={(text) => setPhone(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Senha"
					secureTextEntry
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>

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

				<TextInput
					style={styles.input}
					placeholder="CPF"
					value={cpf}
					onChangeText={(text) => setCpf(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Data de Nascimento"
					value={birth}
					onChangeText={(text) => setBirth(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Rua"
					value={road}
					onChangeText={(text) => setRoad(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Bairro"
					value={neighborhood}
					onChangeText={(text) => setNeighborhood(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Cidade"
					value={city}
					onChangeText={(text) => setCity(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Área quadrada"
					value={area}
					keyboardType="numeric"
					onChangeText={(number) => Number(setArea(number))}
				/>

				<TextInput
					style={styles.input}
					placeholder="Cultivo"
					value={cultivation}
					onChangeText={(text) => setCultivation(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Problema"
					value={problem}
					onChangeText={(text) => setProblem(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Notificação"
					value={notification}
					onChangeText={(text) => setNotification(text)}
				/>

				{/* {selectedImage && (
        <Image
          source={{ uri: selectedImage.uri }}
          style={{ width: 200, height: 200 }}
        />
      )} */}
				{/* <Button title="Escolher Imagem" onPress={pickImage} /> */}
				{/* {selectedImage && ( */}

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

				{/* )} */}
			</ScrollView>
		</View>
	);
};

export default YourComponent;
