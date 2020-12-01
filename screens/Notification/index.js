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
import BackButton from "../../components/BackButton";
import LogoImage from "../../components/LogoImage";
import Footer from "../../components/Footer";
import styles from "./styles";

const image = require("../../assets/img/texture__sections.png");

export default class Notification extends React.Component {
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
                  source={require("../../assets/img/icon--notifications.png")}
                />
              </View>
              <Text style={styles.topNotiText}>notifications</Text>
              <View style={styles.countNotification}>
                <Text style={styles.countNotificationText}>3</Text>
              </View>
            </View>

            <View style={styles.notificationUl}>
              <View style={styles.notificationLi}>
                <View style={styles.notificationLiIcon}>
                  <Image
                    style={styles.notificationIcon}
                    source={require("../../assets/img/icon__notifications--av.png")}
                  />
                </View>
                <View style={styles.notificationReason}>
                  <Text style={styles.notificationTitle}>new content</Text>
                  <Text style={styles.notificationExplain}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum pariatur. ...
                  </Text>
                </View>
                <View style={styles.notificationRight}>
                  <View style={styles.blueDot}></View>
                </View>
              </View>
              <View style={styles.notificationLi}>
                <View style={styles.notificationLiIcon}>
                  <Image
                    style={styles.notificationIcon}
                    source={require("../../assets/img/icon__notifications--av.png")}
                  />
                </View>
                <View style={styles.notificationReason}>
                  <Text style={styles.notificationTitle}>new content</Text>
                  <Text style={styles.notificationExplain}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum pariatur. ...
                  </Text>
                </View>
                <View style={styles.notificationRight}>
                  <View style={styles.blueDot}></View>
                </View>
              </View>
              <View style={styles.notificationLi}>
                <View style={styles.notificationLiIcon}>
                  <Image
                    style={styles.notificationIcon}
                    source={require("../../assets/img/icon__notifications--av.png")}
                  />
                </View>
                <View style={styles.notificationReason}>
                  <Text style={styles.notificationTitle}>new content</Text>
                  <Text style={styles.notificationExplain}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum pariatur. ...
                  </Text>
                </View>
                <View style={styles.notificationRight}>
                  <View style={styles.blueDot}></View>
                </View>
              </View>
              <View style={styles.notificationLi}>
                <View style={styles.notificationLiIcon}>
                  <Image
                    style={styles.notificationIcon}
                    source={require("../../assets/img/icon__notifications--av.png")}
                  />
                </View>
                <View style={styles.notificationReason}>
                  <Text style={styles.notificationTitle}>new content</Text>
                  <Text style={styles.notificationExplain}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum pariatur. ...
                  </Text>
                </View>
                <View style={styles.notificationRight}>
                  <View style={styles.blueDot}></View>
                </View>
              </View>
              <View style={styles.notificationLi}>
                <View style={styles.notificationLiIcon}>
                  <Image
                    style={styles.notificationIcon}
                    source={require("../../assets/img/icon__notifications--av.png")}
                  />
                </View>
                <View style={styles.notificationReason}>
                  <Text style={styles.notificationTitle}>new content</Text>
                  <Text style={styles.notificationExplain}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum pariatur. ...
                  </Text>
                </View>
                <View style={styles.notificationRight}>
                  <View style={styles.blueDot}></View>
                </View>
              </View>
              <View style={styles.notificationLi}>
                <View style={styles.notificationLiIcon}>
                  <Image
                    style={styles.notificationIcon}
                    source={require("../../assets/img/icon__notifications--av.png")}
                  />
                </View>
                <View style={styles.notificationReason}>
                  <Text style={styles.notificationTitle}>new content</Text>
                  <Text style={styles.notificationExplain}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum pariatur. ...
                  </Text>
                </View>
                <View style={styles.notificationRight}>
                  <View style={styles.blueDot}></View>
                </View>
              </View>
              <View style={styles.notificationLi}>
                <View style={styles.notificationLiIcon}>
                  <Image
                    style={styles.notificationIcon}
                    source={require("../../assets/img/icon__notifications--av.png")}
                  />
                </View>
                <View style={styles.notificationReason}>
                  <Text style={styles.notificationTitle}>new content</Text>
                  <Text style={styles.notificationExplain}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum pariatur. ...
                  </Text>
                </View>
                <View style={styles.notificationRight}>
                  <View style={styles.blueDot}></View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
        {/* <Footer /> */}
      </View>
    );
  }
}
