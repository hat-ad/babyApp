import React from "react";
import { Image, Text, View, TextInput } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import styles from "./styles";

export default class ChekboxMulti extends React.Component {
  render() {
    const { options, name, checkboxChange, value, } = this.props;
    
    options.map((opt, index) => {
      var skinName = value.find(x => x == opt) != undefined ? true : false;
      console.log("++++++++++++"+skinName);
    })
    return (
      <View>
      {options.map((opt, index) => (
      <View style={styles.checkboxOut}>
        <CheckBox
          disabled={false}
          value={value.find(x => x == opt) != undefined ? true : false}
          onValueChange={(newValue) => checkboxChange(name, opt)}
          tintColors={{true: '#219FD9'}}
          tintColor={'#219FD9'}
        />

        <Text>{opt}</Text>
      </View>
      ))}
      </View>
    );
  }
}
