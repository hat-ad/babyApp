import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LogoImage from "../../components/LogoImage";
import styles from "./styles";

const image = require("../../assets/img/texture__sections.png");

export default class Sections extends React.Component {
  render() {
    return (
      <View style={styles.mainBody}>
        <ScrollView>
          <Header />
          <LogoImage />
          <View style={styles.allSections}>
            <View style={styles.sections}>
              <View style={styles.eachSections}>
                <ImageBackground source={image} style={styles.sectionBgImg}>
                  <View style={styles.sectionBoxContent}>
                    <TouchableOpacity style={styles.sectionIconBox} onPress={() => this.props.navigation.navigate('DashboardQuestions')}>
                      <Image
                        style={styles.sectionBoxIcon}
                        source={require("../../assets/img/icon__sections--questionnaire.png")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.sectionTopic}>questionnaire</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.sections}>
              <View style={styles.eachSections}>
                <ImageBackground source={image} style={styles.sectionBgImg}>
                  <View style={styles.sectionBoxContent}>
                    <TouchableOpacity style={styles.sectionIconBox} onPress={() => this.props.navigation.navigate('Games')}>
                      <Image
                        style={styles.sectionBoxIcon}
                        source={require("../../assets/img/icon__sections--games.png")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.sectionTopic}>games</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>

            <View style={styles.sections}>
              <View style={styles.eachSections}>
                <ImageBackground source={image} style={styles.sectionBgImg}>
                  <View style={styles.sectionBoxContent}>
                    <TouchableOpacity style={styles.sectionIconBox} onPress={() => this.props.navigation.navigate('TipsList')}>
                      <Image
                        style={styles.sectionBoxIcon}
                        source={require("../../assets/img/icon__sections--tipsadvice.png")}
                      />
                    </TouchableOpacity>
                    <Text style={styles.sectionTopic}>tips &amp; advice</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <Footer /> */}
      </View>
    );
  }
}
