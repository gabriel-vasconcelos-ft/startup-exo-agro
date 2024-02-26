import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import {
  Login,
  Home,
  ListaCliente,
  Perfil,
  AgendarVisita,
  HistoricoVisita,
  CadastroCliente,
  PoliticaPrivacidade,
  Sobre,
  FinalizarVisita,
  MinhaAgenda,
  Relatorios,
  PDF,
} from "../pages";

import { TabBar } from "../components";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
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
        <Stack.Screen name="MinhaAgenda" component={MinhaAgenda} />
        <Stack.Screen name="FinalizarVisita" component={FinalizarVisita} />
        <Stack.Screen name="HistoricoVisita" component={HistoricoVisita} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="Relatorios" component={Relatorios} />
        <Stack.Screen name="PDF" component={PDF} />
        <Stack.Screen
          name="PoliticaPrivacidade"
          component={PoliticaPrivacidade}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      <TabBar />
    </NavigationContainer>
  );
}
