import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#696969",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginTop: 25,
    marginBottom: 20,
  },

  text: {
    textAlign: "center",
    fontSize: 15,
    color: "#696969",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },

  copy: { fontWeight: "bold" },
});

export default styles;
