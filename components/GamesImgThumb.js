import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default class GamesImgThumb extends React.Component {
  render() {
    const { imgpath } = this.props;
    return (
      <TouchableOpacity style={{ borderRadius: 15, marginHorizontal: 20, overflow: "hidden"}}>
        <Image source={require('../assets/img/img1.png')} resizeMode="cover" style={{width: 350, height: 180 }}/>
      </TouchableOpacity>
    );
  }
}
