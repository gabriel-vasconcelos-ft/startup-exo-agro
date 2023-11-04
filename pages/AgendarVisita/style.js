import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
    //alignItems: "center",
    //justifyContent: "center",
  },

  signSchedule: {
    alignItems: "center",
  },

  textSchedule: {
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

  inputObeservation: {
    height: 150,
    textAlignVertical: 'top' 
  },

  buttonColorSave: {
    backgroundColor: "#5FBF3E",
  },

  buttonColorCancel: {
    backgroundColor: "#BE1002",
  },

  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    marginLeft: 20,
  },

  checkboxText: {
    fontSize: 16,
    color: "#696969",
    fontWeight: "normal",
  },
});

export default styles;
