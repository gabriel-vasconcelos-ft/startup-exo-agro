import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginLeft: 7,
    marginRight: 7,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 8,
    width: "46%",
    height: 108,
    justifyContent: "space-around",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 0.5,
    alignItems: "left",
  },

  buttonIcon: {
    fontSize: 27,
    color: "#5FBF3E",
    marginLeft: "6%",
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    marginLeft: "6%",
  },
});

export default styles;
