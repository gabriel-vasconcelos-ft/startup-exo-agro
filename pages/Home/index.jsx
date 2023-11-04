import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import TabBar from "../../components/TabBar";
import QuickAccess from "../../components/QuickAccess";
import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.quickAccess}>Acesso rápido</Text>
      <QuickAccess />
      <TabBar />
    </View>
  );
}
