import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  name: {
    textAlign: "center",
    marginTop: "10%",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#696969",
  },

  text: {
    textAlign: "justify",
    fontSize: 15,
    color: "#696969",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },

  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },

  checkboxText: {
    fontSize: 16,
    color: "#696969",
    fontWeight: "normal",
  },

  flexButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 50,
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
});

export default styles;
