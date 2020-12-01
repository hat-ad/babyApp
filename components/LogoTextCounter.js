import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default class LogoTextCounter extends React.Component {
  render() {
    const { text, source, counter } = this.props;
    return (
      <View style={styles.logoBoxMulti}>
        <View style={styles.logoBoxIconText}>
          <View style={styles.logoBoxIcon}>
            <Image style={styles.logoImg} source={source} />
          </View>
          <Text style={styles.logoText}>{text}</Text>
          <Text style={styles.topCounterHeader}>{counter}</Text>
        </View>
      </View>
    );
  }
}
