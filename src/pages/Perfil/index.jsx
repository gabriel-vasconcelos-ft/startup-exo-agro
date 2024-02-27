import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:suporte@exoagro.com.br");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://media.licdn.com/dms/image/D4D03AQFASt0CtubB_g/profile-displayphoto-shrink_800_800/0/1691850636025?e=1703116800&v=beta&t=LIJ50XYaRDExgmSsgGXExaN3u_lKa8OClPDP4KWbgAs",
              }}
            />
          </View>
          <Text style={styles.name}>Rubens Lima</Text>
          <Text style={styles.profession}>Agronomo</Text>
        </View>
      </View>
      <View style={styles.marginButtons}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Meus dados </Text>
            <AntDesign name="user" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen("PoliticaPrivacidade")}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Política de privacidade </Text>
            <AntDesign name="copy1" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Central de ajuda e suporte </Text>
            <AntDesign name="message1" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen("Sobre")}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sobre </Text>
            <AntDesign name="infocirlceo" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen("Login")}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sair</Text>
            <AntDesign name="logout" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
