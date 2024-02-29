import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
  },

  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(184deg, rgba(95,191,62,1) 0%, rgba(151,210,131,1) 100%)",
    width: "100%",
    maxHeight: "50%",
    minHeight: 235,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
  },

  image: {
    marginTop: 10,
  },

  titulo: {
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    marginTop: 20,
    marginLeft: 15,
  },

  inputContainer: {
    marginTop: 50,
  },

  input: {
    fontSize: 16,
    margin: 20,
    padding: 13,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#5FBF3E",
    marginTop: 0,
  },

  placeholderText: {
    color: "#5FBF3E",
  },

  button: {
    backgroundColor: "#5FBF3E",
    borderRadius: 8,
    maxWidth: "100%",
    height: 53,
    justifyContent: "center",
    shadowOpacity: 0.2,
    elevation: 0.5,
    alignItems: "center",
    marginLeft: 21,
    marginRight: 21,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
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
    borderRadius: 8,
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
});

export default styles;
