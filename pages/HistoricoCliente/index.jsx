import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import TabBar from "../../components/TabBar";

export default function HistoricoCliente() {
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
            <Text style={styles.buttonText}>Título do relatório</Text>
            <Text style={styles.buttonText}>12/12/2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Título do relatório</Text>
            <Text style={styles.buttonText}>12/12/2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Título do relatório</Text>
            <Text style={styles.buttonText}>12/12/2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Título do relatório</Text>
            <Text style={styles.buttonText}>12/12/2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Título do relatório</Text>
            <Text style={styles.buttonText}>12/12/2023</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TabBar />
    </View>
  );
}
