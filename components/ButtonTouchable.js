import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class ButtonTouchable extends React.Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.touchableBtn} onPress={() => onPress ? onPress() : ''}>
        <Text style={styles.touchableBtnTxt}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
