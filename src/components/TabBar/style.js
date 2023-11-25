import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // //backgroundColor: "#f5f5f5",
    // width: "100%",
    // height: 1,
  },

  navbar: {
    //backgroundColor: "#fff",
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    height: 60,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    position: "sticky",
    bottom: 0,
  },

  navbarButton: {
    justifyContent: "center",
    alignItems: "center",
  },

  navbarButtonIcon: {
    fontSize: 27,
    color: "#000",
  },
});

export default styles;
