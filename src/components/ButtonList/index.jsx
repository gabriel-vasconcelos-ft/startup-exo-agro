import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { getAllClients } from "../../service/ClienteService";

import styles from "./style";

export default function ButtonList() {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		const getClients = async () => {
			try {
				const response = await getAllClients();
				setClients(response);
			} catch (error) {
				console.error("Erro ao buscar dados:", error);
			}
		};
		getClients();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={clients}
				keyExtractor={(item) => item.user_id}
				renderItem={({ item }) => (
					// * Depois passar o ID do usuário para a próxima tela
					<TouchableOpacity style={styles.button}>
						<View style={styles.buttonContainer}>
							<Text style={styles.buttonText} key={item.user_id}>
								{item["User"].name}
							</Text>
							<AntDesign name="export" style={styles.buttonIcon} />
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}
