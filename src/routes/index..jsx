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
} from "../pages";

import { TabBar } from '../components';

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
        <Stack.Screen name="HistoricoVisita" component={HistoricoVisita} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="#" component={""} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      <TabBar />
    </NavigationContainer>
  );
}
