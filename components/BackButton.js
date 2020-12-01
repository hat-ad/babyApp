import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default class BackButton extends React.Component {
  render() {
    return (
      <View style={styles.topBackBtn}>
        <Image
          style={styles.topBackIcon}
          source={require("../assets/img/icon--back.png")}
        />
      </View>
    );
  }
}
