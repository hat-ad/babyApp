import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default class LogoImage extends React.Component {
  render() {
    return (
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImg}
          source={require("../assets/img/logo.png")}
        />
      </View>
    );
  }
}
