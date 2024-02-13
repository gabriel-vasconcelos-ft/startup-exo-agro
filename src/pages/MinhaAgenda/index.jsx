import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import { getAllVisits } from "../../service/VisitService";
import Header2 from "../../components/Header2";

import styles from "./style";

export default function MinhaAgenda() {
	const navigation = useNavigation();

	const [visits, setVisits] = useState([]);

	useEffect(() => {
		const getVisits = async () => {
			try {
				const response = await getAllVisits();
				setVisits(response);
			} catch (error) {
				console.error("Erro ao buscar dados:", error);
			}
		};
		getVisits();
	}, []);

	const updateVisit = (objectVisit) => {
		navigation.navigate("FinalizarVisita", { objectVisit });
	};

	return (
		<View style={styles.container}>
			<Header2 />
			<View style={styles.listContainer}>
				<Text style={styles.list}>Visitas Agendadas</Text>
				<TouchableOpacity
					style={styles.buttonAdd}
					onPress={() => botaoAddCliente()}
				>
					<AntDesign name="plus" style={styles.buttonIcon} />
				</TouchableOpacity>
			</View>
			<FlatList
				data={visits}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							updateVisit({
								visitId: item.id,
								clientId: item.client_id,
								agronomistId: item.agronomist_id,
								goal: item.goal,
								date: item.date,
								arrival: item.arrival,
								exit: item.exit,
							})
						}
					>
						<View style={styles.buttonContainer}>
							<Text style={styles.buttonText} key={item.id}>
								Objetivo: {item.goal} {"\n"}
								Data marcada: {item.date} {"\n"}
								Status: {item.status}
							</Text>
							<AntDesign name="export" style={styles.buttonIcon} />
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}
