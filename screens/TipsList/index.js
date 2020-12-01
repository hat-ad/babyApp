import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput, TouchableOpacity
} from "react-native";
import Header from "../../components/Header";
import ButtonTouchable from "../../components/ButtonTouchable";
import BackButton from "../../components/BackButton";
import Icon from "react-native-vector-icons/FontAwesome";
import LogoTextCounter from "../../components/LogoTextCounter";
import SearchButton from "../../components/SearchButton";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import { Video } from 'expo-av';

import styles from "./styles";

const image = require("../../assets/img/texture__sections.png");

const logoIcon = require("../../assets/img/icon__sections--tipsadvice.png");

export default class TipsList extends React.Component {
  render() {
    return (
      <View style={styles.mainBody}>
        <ScrollView>
          <View style={styles.topActions}>
            <BackButton />
            <SearchButton />
          </View>
          <Header />
          <LogoTextCounter
            source={logoIcon}
            text={"Tips & Advice"}
            counter={3}
          />

          <SafeAreaView style={styles.container}>
            <View style={styles.tipsUl}>
              <TouchableOpacity style={styles.tipsli} onPress={() => this.props.navigation.navigate('TipsNAdvice')}>
                <Text style={styles.tipsliTitle}>Articulation Development Guidelines</Text>
                <Text style={styles.tipsliContent}>
                  This document contains information that shows the age by which children are typically able to articulate speech sounds. You can use it to understand if your child’s speech sounds are developing in line with typical development
                </Text>
                <View style={styles.tipsLiBottom}>
                  <View style={styles.tipsLiBottomLeft}>
                    <View style={styles.tipsLiBottomLeftEach}>
                      <View style={styles.tipsLiBottomLoved}>
                        <Image
                          style={styles.loveIcon}
                          source={require("../../assets/img/icon__like.png")}
                        />
                      </View>
                      <Text style={styles.socialCount}>334</Text>
                    </View>
                    <View style={styles.tipsLiBottomLeftEach}>
                      <View style={styles.tipsLiBottomLoved}>
                        <Image
                          style={styles.loveIcon}
                          source={require("../../assets/img/icon__comment.png")}
                        />
                      </View>
                      <Text style={styles.socialCount}>333</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.dot}></View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tipsli} onPress={() => this.props.navigation.navigate('TipsNAdvice')}>
                <View style={styles.topHeroSection}>
                  <View style={styles.topSectionPic}>
                  <Video
                      source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                      rate={1.0}
                      volume={1.0}
                      isMuted={false}
                      resizeMode="cover"
                      shouldPlay
                      useNativeControls={true}
                      isLooping
                      style={{  height: 180 }}
                    />
                  </View>
                  <View style={styles.playVideo}>
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
                  </View>
                </View>
                <View style={styles.tipsLiBottom}>
                  <View style={styles.tipsLiBottomLeft}>
                    <View style={styles.tipsLiBottomLeftEach}>
                      <View style={styles.tipsLiBottomLoved}>
                        <Image
                          style={styles.loveIcon}
                          source={require("../../assets/img/icon__like.png")}
                        />
                      </View>
                      <Text style={styles.socialCount}>333</Text>
                    </View>
                    <View style={styles.tipsLiBottomLeftEach}>
                      <View style={styles.tipsLiBottomLoved}>
                        <Image
                          style={styles.loveIcon}
                          source={require("../../assets/img/icon__comment.png")}
                        />
                      </View>
                      <Text style={styles.socialCount}>333</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tipsli} onPress={() => this.props.navigation.navigate('TipsNAdvice')}>
                <Text style={styles.tipsliTitle}>content title goes here</Text>
                <Text style={styles.tipsliContent}>
                  Video/Audio title goes hereVideo/Audio title goes here
                  Video/Audio title goes hereVideo/Audio title goes here
                  Video/Audio title goes here
                </Text>
                <View style={styles.tipsLiBottom}>
                  <View style={styles.tipsLiBottomLeft}>
                    <View style={styles.tipsLiBottomLeftEach}>
                      <View style={styles.tipsLiBottomLoved}>
                        <Image
                          style={styles.loveIcon}
                          source={require("../../assets/img/icon__like.png")}
                        />
                      </View>
                      <Text style={styles.socialCount}>333</Text>
                    </View>
                    <View style={styles.tipsLiBottomLeftEach}>
                      <View style={styles.tipsLiBottomLoved}>
                        <Image
                          style={styles.loveIcon}
                          source={require("../../assets/img/icon__comment.png")}
                        />
                      </View>
                      <Text style={styles.socialCount}>333</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.dot}></View>
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 80 }}></View>
          </SafeAreaView>
        </ScrollView>

        {/* <Footer /> */}
      </View>
    );
  }
}
