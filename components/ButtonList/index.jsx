import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function ButtonList() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Rubens Ferreira Lima </Text>
            <AntDesign name="export" style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
