import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default class SearchButton extends React.Component {
  render() {
    return (
      <View style={styles.topSearchBtn}>
        <Image
          style={styles.topBackIcon}
          source={require("../assets/img/icon--search.png")}
        />
      </View>
    );
  }
}
