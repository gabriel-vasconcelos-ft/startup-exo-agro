import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(184deg, rgba(95,191,62,1) 0%, rgba(151,210,131,1) 100%)",
    width: "100%",
    maxHeight: "21%",
    minHeight: "21%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "space-around",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 25,
    marginLeft: 10,
  },

  name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    marginTop: 20,
  },

  textWelcome: {
    color: "#fff",
  },
});

export default styles;
