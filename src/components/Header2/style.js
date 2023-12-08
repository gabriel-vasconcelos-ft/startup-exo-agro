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
    // marginLeft: "42%"
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginTop: 25,
    marginRight: 15,
  },
});

export default styles;
