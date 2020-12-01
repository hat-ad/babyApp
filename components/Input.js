import React from "react";
import { Image, Text, View, TextInput } from "react-native";

import styles from "./styles";

export default class Input extends React.Component {
  render() {
    const { placeholder, noform, name,handleChange, value } = this.props;
    return (
      <View style={noform ? styles.noformGroup : styles.noformGroup}>
        <TextInput
          style={styles.inputArea}
          name={name} 
          placeholder={placeholder}
          onChangeText={(text) => handleChange(text, name)}
          value={value}
          placeholderTextColor="#393B3C"
          style={{ fontStyle: 'italic', height: 40 }}
        ></TextInput>
      </View>
    );
  }
}
