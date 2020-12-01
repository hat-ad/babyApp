import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import ButtonTouchable from "../../components/ButtonTouchable";
import BackButton from "../../components/BackButton";
import LogoImage from "../../components/LogoImage";
import Footer from "../../components/Footer";
import Svg, { Path } from "react-native-svg";
import styles from "./styles";

const image = require("../../assets/img/texture__sections.png");

export default class Help extends React.Component {
  render() {
    return (
      <View style={styles.mainBody}>
        <ScrollView>
          <View style={styles.topActions}>
            <BackButton />
          </View>
          <Header />
          <LogoImage />
          <SafeAreaView style={styles.container}>
            <View style={styles.helpTopBar}>
              <Image
                style={styles.eachChildProfilePic}
                source={require("../../assets/img/icon--help.png")}
              />
              <Text style={styles.topHelpText}>help</Text>
            </View>
            <View style={styles.bannerHelp}>
              <Image
                style={styles.helperBanner}
                source={require("../../assets/img/graphics--help.png")}
              />
            </View>
            <View style={styles.helperBannerTxt}>
              <Text style={styles.problemQstn}>
                Are you facing any problem?
              </Text>
              <Text style={styles.problemSlvGuide}>
                if you need instant support then leave a message here to reach
                us quickly.
              </Text>
              <Text style={styles.problemSlvGuide}>
                Our support will reply as soon as possible after you send us a
                message
              </Text>
            </View>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Leave your message here..."
              placeholderTextColor={"black"}
            />

            <View style={styles.sendQuarySec}>
              <View style={styles.continueBtn}>
                <ButtonTouchable text={"send"} />
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
        {/* <Footer /> */}
      </View>
    );
  }
}
