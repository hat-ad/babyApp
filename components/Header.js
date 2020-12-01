import * as React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import styles from "./styles";
const image = require("../assets/img/banner__texture.png");
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <ImageBackground source={image} style={styles.bannerBg}>
          {/* <View style={styles.logoBox}>
            <Image
              style={styles.logoImg}
              source={require("../assets/img/logo.png")}
            />
          </View> */}
        </ImageBackground>
        <View style={styles.headerBg}>
          <Image
            style={styles.headerBgIcon}
            source={require("../assets/img/banner__curve.png")}
          />
        </View>
      </View>
    );
  }
}
