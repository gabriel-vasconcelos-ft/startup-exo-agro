import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
  },

  button: {
    backgroundColor: "#5FBF3E",
    borderRadius: 8,
    maxWidth: "100%",
    height: 53,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 21,
    marginRight: 21,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    flex: 1,
  },

  buttonIcon: {
    fontSize: 27,
    color: "#fff",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 21,
    marginRight: 21,
  },
});

export default styles;
