import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import AgendarVisita from "./pages/AgendarVisita";
import Perfil from "./pages/Perfil";
import ListaCliente from "./pages/ListaCliente";
import PerfilCliente from "./pages/PerfilCliente";
import HistoricoVisita from "./pages/HistoricoVisita";
import HistoricoCliente from "./pages/HistoricoCliente";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Home />
      {/* <CadastroCliente /> */}
      {/* <AgendarVisita /> */}
      {/* <ListaCliente /> */}
      {/* <HistoricoVisita/> */}
      {/* <Perfil /> */}
      {/* <PerfilCliente/> */}
      {/* <HistoricoCliente /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
