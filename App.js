import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View} from "react-native";

import Login from "./pages/Login";
import TabBar from "./components/TabBar";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

import AgendarVisita from "./pages/AgendarVisita";
import HistoricoVisita from "./pages/HistoricoVisita";
import CadastroCliente from "./pages/CadastroCliente";
import ListaCliente from "./pages/ListaCliente";
// import PerfilCliente from "./pages/PerfilCliente";
// import HistoricoCliente from "./pages/HistoricoCliente";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListaCliente" component={ListaCliente} />
        <Stack.Screen name="Perfil" component={Perfil} />

        <Stack.Screen name="AgendarVisita" component={AgendarVisita} />
        <Stack.Screen name="HistoricoVisita" component={HistoricoVisita} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="#" component={""} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      <TabBar />
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
});
