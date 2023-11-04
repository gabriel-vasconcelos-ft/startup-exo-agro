import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function TabBar() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarButton}>
          <AntDesign name="home" style={styles.navbarButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton}>
          <AntDesign name="linechart" style={styles.navbarButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton}>
          <AntDesign name="user" style={styles.navbarButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
