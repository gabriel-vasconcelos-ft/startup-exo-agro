import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.titulo}>Exo Agro</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.licdn.com/dms/image/D4D03AQFASt0CtubB_g/profile-displayphoto-shrink_800_800/0/1691850636025?e=1703116800&v=beta&t=LIJ50XYaRDExgmSsgGXExaN3u_lKa8OClPDP4KWbgAs",
          }}
        />
      </View>
    </View>
  );
}
