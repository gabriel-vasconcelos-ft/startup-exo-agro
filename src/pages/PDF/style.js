import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(184deg, rgba(95,191,62,1) 0%, rgba(151,210,131,1) 100%)",
    width: "100%",
    maxHeight: 100,
    minHeight: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "space-around",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    marginTop: 25,
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginTop: 25,
    marginRight: 15,
  },

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
	width: 180,
  },

  dropdown: {
    fontSize: 16,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 0,
  },

  flexColuna: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  flexButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 70,
    marginBottom: 150,
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

  buttonColorPrint: {
    backgroundColor: "#1E90FF",
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
    color: "#000",
	fontWeight: "bold",
  },
});

export default styles;
