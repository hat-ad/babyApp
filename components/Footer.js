import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import styles from "./styles";

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerBody}>
          <View style={styles.footerContent}>
            <View style={styles.footerIcons}>
              <Image
                style={styles.eachFooterIcon}
                source={require("../assets/img/icon__tab--footer__dashboard.png")}
              />
            </View>
            <View style={styles.footerIcons}>
              <Image
                style={styles.eachFooterIcon}
                source={require("../assets/img/icon__tab--footer__notifications.png")}
              />
            </View>
            <View style={styles.footerIcons}>
              <Image
                style={[styles.eachFooterIcon, styles.currentSection]}
                source={require("../assets/img/icon__tab--footer__profile.png")}
              />
            </View>
            <View style={styles.footerIcons}>
              <Image
                style={styles.eachFooterIcon}
                source={require("../assets/img/icon__tab--footer__help.png")}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
