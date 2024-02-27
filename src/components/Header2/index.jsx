import React from "react";
import { Text, View, Image} from "react-native";
import styles from "./style";

export default function Header2() {
  return (
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Exo Agro</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg",
            }}
          />
        </View>
    </View>
  );
}
