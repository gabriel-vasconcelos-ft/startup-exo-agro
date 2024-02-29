import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
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
import * as Print from "expo-print";

import styles from "./style";

import htmlTemplate from "./htmlTemplate";

export default function PDF() {
	const navigation = useNavigation();
	const route = useRoute();

	const { dataPDF } = route.params || {};
	console.log(dataPDF);

	const print = async () => {
		await Print.printAsync({
			html: htmlTemplate(
				name,
				phone,
				email,
				gender,
				cpf,
				birth,
				road,
				neighborhood,
				city,
				area,
				cultivation,
				problem,
				notification,
				goal,
				diagnosis,
				pest,
				product,
				observations,
				planting,
				status,
				date,
				arrival,
				exit
			),
		});
	};

	const [name, setName] = useState(dataPDF.name || "");
	const [phone, setPhone] = useState(dataPDF.phone);
	const [email, setEmail] = useState(dataPDF.email);
	const [gender, setGender] = useState(dataPDF.gender);
	const [cpf, setCpf] = useState(dataPDF.cpf);
	const [birth, setBirth] = useState(dataPDF.birth);
	const [road, setRoad] = useState(dataPDF.road);
	const [neighborhood, setNeighborhood] = useState(dataPDF.neighborhood);
	const [city, setCity] = useState(dataPDF.city);
	const [area, setArea] = useState(dataPDF.area);
	const [cultivation, setCultivation] = useState(dataPDF.cultivation);
	const [problem, setProblem] = useState(dataPDF.problem);
	const [notification, setNotification] = useState(dataPDF.notification);

	const [goal, setGoal] = useState(dataPDF.goal);
	const [diagnosis, setDiagnosis] = useState(dataPDF.diagnosis);
	const [pest, setPest] = useState(dataPDF.pest);
	const [product, setProduct] = useState(dataPDF.product);
	const [observations, setObservations] = useState(dataPDF.observations);
	const [planting, setPlanting] = useState(dataPDF.planting);
	const [status, setStatus] = useState(dataPDF.status);
	const [date, setDate] = useState(dataPDF.date);
	const [arrival, setArrival] = useState(dataPDF.arrival);
	const [exit, setExit] = useState(dataPDF.exit);

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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Telefone</Text>
						<TextInput
							style={styles.input}
							value={phone}
							onChangeText={(text) => setPhone(text)}
							editable={false}
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
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Data de nascimento</Text>
						<TextInput
							style={styles.input}
							value={birth}
							onChangeText={(text) => setBirth(text)}
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Bairro</Text>
						<TextInput
							style={styles.input}
							value={neighborhood}
							onChangeText={(text) => setNeighborhood(text)}
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Área</Text>
						<TextInput
							style={styles.input}
							value={area}
							keyboardType="numeric"
							onChangeText={(number) => Number(setArea(number))}
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Problema</Text>
						<TextInput
							style={styles.input}
							value={problem}
							onChangeText={(text) => setProblem(text)}
							editable={false}
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
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Praga</Text>
						<TextInput
							style={styles.input}
							value={pest}
							onChangeText={(text) => setPest(text)}
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Observações</Text>
						<TextInput
							style={styles.input}
							value={observations}
							onChangeText={(text) => setObservations(text)}
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Status</Text>
						<TextInput
							style={styles.input}
							value={status}
							onChangeText={(text) => setStatus(text)}
							editable={false}
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
							editable={false}
						/>
					</View>

					<View>
						<Text style={styles.label}>Horário de chegada</Text>
						<TextInput
							style={styles.input}
							value={arrival}
							onChangeText={(text) => setArrival(text)}
							editable={false}
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
							editable={false}
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
