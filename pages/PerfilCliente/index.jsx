import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import TabBar from "../../components/TabBar";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 


export default function PerfilCliente() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://media.licdn.com/dms/image/C4E03AQETm4aKfq24_g/profile-displayphoto-shrink_200_200/0/1649974375627?e=1704326400&v=beta&t=61kxavbamUYAzStBwuFLm0nKzg3ADeSXgL-sqvwhrIk",
              }}
            />
          </View>
          <Text style={styles.name}>Gabriel Henrique</Text>
          <Text style={styles.profession}>Cliente</Text>
        </View>
      </View>
      <View style={styles.marginButtons}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Dados pessoais</Text>
            <AntDesign name="user" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Relatórios</Text>
            <AntDesign name="copy1" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Agendar visita</Text>
            <AntDesign name="solution1" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Histórico de visitas</Text>
            <AntDesign name="clockcircleo" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Falar com o cliente </Text>
            <FontAwesome name="whatsapp" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <TabBar />
    </View>
  );
}
