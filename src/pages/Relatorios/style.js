import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
  },

  input: {
    fontSize: 16,
    margin: 20,
    padding: 13,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: 50,
  },

  list: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 5,
    color: "#696969",
  },

  listContainer: {
    alignItems: "center",
  },

  buttonAdd:{
      backgroundColor: "#5FBF3E",
      borderRadius: 8,
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginLeft: "75%",
  },

  buttonIcon: {
    fontSize: 27,
    color: "#fff",
  },
});

export default styles;
