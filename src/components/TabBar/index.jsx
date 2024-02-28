import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TabBar() {
  const navigation = useNavigation();
  const [activeIcon, setActiveIcon] = useState("home");

  const navigateToScreen = (screenName, iconName) => {
    setActiveIcon(iconName);
    navigation.navigate(screenName);
  };

  const isIconActive = (iconName) => activeIcon === iconName;

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navbarButton}
          onPress={() => navigateToScreen("Home", "home")}
        >
          <AntDesign
            name="home"
            style={[
              styles.navbarButtonIcon,
              { color: isIconActive("home") ? "green" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navbarButton}
          onPress={() => navigateToScreen("Relatorios", "linechart")}
        >
          <AntDesign
            name="linechart"
            style={[
              styles.navbarButtonIcon,
              { color: isIconActive("linechart") ? "green" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navbarButton}
          onPress={() => navigateToScreen("Perfil", "user")}
        >
          <AntDesign
            name="user"
            style={[
              styles.navbarButtonIcon,
              { color: isIconActive("user") ? "green" : "black" },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
