import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import ButtonTouchable from "../../components/ButtonTouchable";
import BackButton from "../../components/BackButton";
import Icon from "react-native-vector-icons/FontAwesome";
import LogoText from "../../components/LogoText";
import SearchButton from "../../components/SearchButton";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import { Video } from 'expo-av';

import styles from "./styles";

const image = require("../../assets/img/texture__sections.png");

const logoIcon = require("../../assets/img/icon__sections--tipsadvice.png");

export default class TipsNAdvice extends React.Component {
  render() {
    return (
      <View style={styles.mainBody}>
        <ScrollView>
          <View style={styles.topActions}>
            <BackButton />
            <SearchButton />
          </View>
          <Header />
          <LogoText source={logoIcon} text={"Tips & Advice"} />
          <SafeAreaView style={styles.container}>
            {/*<View style={styles.topHeroSection}>
              <View style={styles.topSectionPic}>
                
                <Video
                  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  // shouldPlay
                  useNativeControls={true}
                  isLooping
                  style={{  height: 180 }}
                />
              </View>
              <View style={styles.playVideo}>
                
              </View>
            </View>*/}
            {/* <Image
              style={[
                styles.playVideoIcon,
                {
                  transform: [{ translateX: -80 }],
                  transform: [{ translateY: -15 }],
                },
              ]}
              source={require("../../assets/img/icon__play.png")}
            /> */}
            <View style={styles.titleNdetails}>
              <Text style={styles.titleSection}>
                Articulation Development Guidelines
              </Text>
              <Text style={styles.contentSection}>
                You can download the information provided by your Speech Therapist here. Please help us build a better service in the future by giving us some feedback below.
              </Text>
            </View>
            <View style={styles.commentSection}>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Type your comments here..."
                placeholderTextColor={"black"}
              />
            </View>
            <View style={styles.reactOnComment}>
              <ButtonTouchable
                customDesign={styles.customBtn}
                text={"Submit"}
              />
              <Text style={styles.likedContent}>Like the Content: </Text>
            </View>
            <View style={styles.divider}></View>
            <Text style={styles.commentStart}>
              Comments (<Text style={styles.commentIncrease}>116</Text>)
            </Text>
            <View style={styles.userCommented}>
              <View style={styles.commentorPicSection}>
                <Image
                  style={styles.commentorPic}
                  source={require("../../assets/img/avatar__girl.png")}
                />
              </View>
              <View style={styles.commentorDetails}>
                <Text style={styles.commentorName}>amanda thompson</Text>
                <Text style={styles.commentedOn}>1 hour Ago</Text>
                <View style={styles.actualCommentBox}>
                  <Text style={styles.actualComment}>
                    Video/Audio title goes hereVideo/Audio title goes
                    hereideo/Audio title goes hereVideo/Audio title goes
                    hereVideo/Audio title goes here
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
