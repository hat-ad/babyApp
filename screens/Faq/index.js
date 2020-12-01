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

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Svg, { Path } from "react-native-svg";
import { RadioButton, Checkbox } from "react-native-paper";
import LogoImage from "../../components/LogoImage";
import styles from "./styles";

const image = require("../../assets/img/texture__sections.png");

const logoIcon = require("../../assets/img/icon__questionnaire-title.png");

const searchLogo = require("../../assets/img/icon--search-white.png");

export default class Faq extends React.Component {
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
            <View style={styles.notificationTop}>
              <View style={styles.notificationIconBox}>
                <Image
                  style={styles.notificationIcon}
                  source={require("../../assets/img/icon--help.png")}
                />
              </View>
              <Text style={styles.topNotiText}>FAQs</Text>
            </View>
            <View style={styles.typeKeywordToSearch}>
              <View style={styles.topSeachBar}>
                <Input
                  customDesignInput={styles.customDesignInput}
                  customDesign={styles.customInput}
                  placeholder="Enter Your Keyword to Search"
                />
              </View>
              <View style={styles.topSeachBarBtn}>
                <ButtonTouchable
                  customDesign={styles.customDesignBtn}
                  text={searchLogo}
                />
              </View>
            </View>
            <View style={styles.faqUlList}>
              <View style={styles.faqLiList}>
                <View style={styles.faqLiListBody}>
                  <View style={styles.blueDot}></View>
                  <Text style={styles.faqLiListTitle}>
                    Are you facing any problem?
                  </Text>
                  <View style={styles.openCloseIcons}>
                    <Image
                      style={[styles.rightIcon, styles.openIcon]}
                      source={require("../../assets/img/icon--expand.png")}
                    />
                    <Image
                      style={[styles.rightIcon, styles.openClose]}
                      source={require("../../assets/img/icon--collapse.png")}
                    />
                  </View>
                </View>
                <View style={styles.faqLiListBodyContent}>
                  <Text>
                    Our support will reply as soon as possible after you send us
                    a message
                  </Text>
                </View>
              </View>
              <View style={styles.faqLiList}>
                <View style={styles.faqLiListBody}>
                  <View style={styles.blueDot}></View>
                  <Text style={styles.faqLiListTitle}>
                    Are you facing any problem?
                  </Text>
                  <View style={styles.openCloseIcons}>
                    <Image
                      style={[
                        styles.rightIcon,
                        styles.openIcon,
                        styles.currenthideSection,
                      ]}
                      source={require("../../assets/img/icon--expand.png")}
                    />
                    <Image
                      style={[
                        styles.rightIcon,
                        styles.openClosem,
                        styles.currentShowSection,
                      ]}
                      source={require("../../assets/img/icon--collapse.png")}
                    />
                  </View>
                </View>
                <View
                  style={[
                    styles.faqLiListBodyContent,
                    styles.currentShowSection,
                  ]}
                >
                  <Text>
                    Our support will reply as soon as possible after you send us
                    a message
                  </Text>
                </View>
              </View>
              <View style={styles.faqLiList}>
                <View style={styles.faqLiListBody}>
                  <View style={styles.blueDot}></View>
                  <Text style={styles.faqLiListTitle}>
                    Are you facing any problem?
                  </Text>
                  <View style={styles.openCloseIcons}>
                    <Image
                      style={[styles.rightIcon, styles.openIcon]}
                      source={require("../../assets/img/icon--expand.png")}
                    />
                    <Image
                      style={[styles.rightIcon, styles.openClose]}
                      source={require("../../assets/img/icon--collapse.png")}
                    />
                  </View>
                </View>
                <View style={styles.faqLiListBodyContent}>
                  <Text>
                    Our support will reply as soon as possible after you send us
                    a message
                  </Text>
                </View>
              </View>
              <View style={styles.faqLiList}>
                <View style={styles.faqLiListBody}>
                  <View style={styles.blueDot}></View>
                  <Text style={styles.faqLiListTitle}>
                    Are you facing any problem?
                  </Text>
                  <View style={styles.openCloseIcons}>
                    <Image
                      style={[styles.rightIcon, styles.openIcon]}
                      source={require("../../assets/img/icon--expand.png")}
                    />
                    <Image
                      style={[styles.rightIcon, styles.openClose]}
                      source={require("../../assets/img/icon--collapse.png")}
                    />
                  </View>
                </View>
                <View style={styles.faqLiListBodyContent}>
                  <Text>
                    Our support will reply as soon as possible after you send us
                    a message
                  </Text>
                </View>
              </View>
              <View style={styles.faqLiList}>
                <View style={styles.faqLiListBody}>
                  <View style={styles.blueDot}></View>
                  <Text style={styles.faqLiListTitle}>
                    Are you facing any problem?
                  </Text>
                  <View style={styles.openCloseIcons}>
                    <Image
                      style={[styles.rightIcon, styles.openIcon]}
                      source={require("../../assets/img/icon--expand.png")}
                    />
                    <Image
                      style={[styles.rightIcon, styles.openClose]}
                      source={require("../../assets/img/icon--collapse.png")}
                    />
                  </View>
                </View>
                <View style={styles.faqLiListBodyContent}>
                  <Text>
                    Our support will reply as soon as possible after you send us
                    a message
                  </Text>
                </View>
              </View>
              <View style={[styles.faqLiList, styles.lastChild]}>
                <View style={styles.faqLiListBody}>
                  <View style={styles.blueDot}></View>
                  <Text style={styles.faqLiListTitle}>
                    Are you facing any problem?
                  </Text>
                  <View style={styles.openCloseIcons}>
                    <Image
                      style={[styles.rightIcon, styles.openIcon]}
                      source={require("../../assets/img/icon--expand.png")}
                    />
                    <Image
                      style={[styles.rightIcon, styles.openClose]}
                      source={require("../../assets/img/icon--collapse.png")}
                    />
                  </View>
                </View>
                <View style={styles.faqLiListBodyContent}>
                  <Text>
                    Our support will reply as soon as possible after you send us
                    a message
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 80 }}></View>
          </SafeAreaView>
        </ScrollView>

        {/* <Footer /> */}
      </View>
    );
  }
}
