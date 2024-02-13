import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	signUpClient: {
		alignItems: "center",
	},

	textSignUpClient: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 40,
		color: "#696969",
		marginBottom: 40,
	},

	input: {
		fontSize: 16,
		margin: 20,
		padding: 13,
		backgroundColor: "#fff",
		borderRadius: 8,
		marginTop: 0,
	},

	dropdown: {
		fontSize: 16,
		margin: 20,
		backgroundColor: "#fff",
		borderRadius: 8,
		marginTop: 0,
	},

	flexButtons: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 70,
		marginBottom: 95,
	},

	button: {
		borderRadius: 8,
		width: "48%",
		height: 53,
		justifyContent: "center",
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 0.5,
		alignItems: "center",
	},

	buttonText: {
		color: "#fff",
		fontWeight: "bold",
	},

	buttonColorSave: {
		backgroundColor: "#5FBF3E",
	},

	buttonColorCancel: {
		backgroundColor: "#BE1002",
	},

	viewButton: {
		marginTop: 20,
		alignItems: "center",
	},

	boxMessageErro: {
		padding: 20,
		marginLeft: 20,
		marginRight: 20,
		color: "#fff",
		backgroundColor: "#dc3545",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		textAlign: "center",
	},

	boxMessageSuccess: {
		padding: 20,
		marginLeft: 20,
		marginRight: 20,
		color: "#fff",
		backgroundColor: "#39d353",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		textAlign: "center",
	},

	label: {
		fontSize: 15,
		marginBottom: 5,
		marginLeft: 20,
		color: "#646464",
	},
});

export default styles;
