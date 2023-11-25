import React from "react";
import styles from "./style";
import { Text, View } from "react-native";
import Header from "../../components/Header";
import QuickAccess from "../../components/QuickAccess";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.quickAccess}>Acesso rápido</Text>
      <QuickAccess />
    </View>
  );
}
