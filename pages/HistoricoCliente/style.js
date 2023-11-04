import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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
    minHeight: "50%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginTop: 55,
  },

  name: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 3,
  },

  profession: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 60,
  },

  marginButtons: {
    marginTop: 40,
  },

  button: {
    backgroundColor: "#5FBF3E",
    borderRadius: 8,
    maxWidth: "100%",
    height: 55,
    justifyContent: "center",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 0.5,
    alignItems: "center",
    marginLeft: 21,
    marginRight: 21,
    marginBottom: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    fontSize: 16,
    marginLeft: 21,
  },
  
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
