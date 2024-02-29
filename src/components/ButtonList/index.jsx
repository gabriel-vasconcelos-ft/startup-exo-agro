import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { getDoneVisits } from "../../service/VisitService";

import styles from "./style";

export default function ButtonList() {
	const navigation = useNavigation();

	const [visits, setVisits] = useState([]);

	useEffect(() => {
		const getVisits = async () => {
			try {
				const response = await getDoneVisits();
				console.log(response);
				setVisits(response);
			} catch (error) {
				console.error("Erro ao buscar dados:", error);
			}
		};
		getVisits();
	}, []);

	const dadosPdf = (dataPDF) => {
		navigation.navigate("PDF", { dataPDF });
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={visits}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							dadosPdf({
								goal: item.goal,
								diagnosis: item.diagnosis,
								pest: item.pest,
								product: item.product,
								observations: item.observations,
								planting: item.planting,
								status: item.status,
								date: item.date,
								arrival: item.arrival,
								exit: item.exit,
								area: item.Client.area,
								cultivation: item.Client.cultivation,
								problem: item.Client.problem,
								notification: item.Client.notification,
								name: item.Client.User.name,
								phone: item.Client.User.phone,
								cpf: item.Client.User.cpf,
								email: item.Client.User.email,
								gender: item.Client.User.gender,
								birth: item.Client.User.birth,
								road: item.Client.User.road,
								road: item.Client.User.road,
								neighborhood: item.Client.User.neighborhood,
								city: item.Client.User.city,
							})
						}
					>
						<View style={styles.buttonContainer}>
							<Text style={styles.buttonText} key={item.id}>
								{item.Client.User.name} {"\n"}
								Visita realizada em: {item.date}
							</Text>
							<AntDesign name="export" style={styles.buttonIcon} />
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}
