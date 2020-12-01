import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions, ImageBackground
} from "react-native";

import styles from "./styles";

export default class Header extends React.Component {
  render() {
    return (

      <ImageBackground style={{ backgroundColor: "#3c9fd9" }} source={{ uri: "../assets/img/banner__texture.png" }}>
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.header}>

          </View>
        </View>
        
        <View style={styles.headerbottom}>

        </View>
      </ImageBackground>
    	
    );
  }
}
