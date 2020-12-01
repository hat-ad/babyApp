import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Svg, { Path } from "react-native-svg";

export default class welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Kazi Hasan", loading: false });
    }, 2000);
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }

    return (
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.topBlue}>
            <View style={styles.cheatBlue}></View>
          </View>

          <View style={styles.whiteDiv}>
            {/*Top Image Bar  */}
            <View style={styles.topImg}>
              <View style={styles.userImg}>
                <Image
                  style={styles.userImgPic}
                  source={require("../../assets/img/woman.png")}
                />
                <TouchableOpacity
                  onPress={() => alert("hi")}
                  style={styles.bottomCam}
                >
                  <Image
                    style={styles.cameraPic}
                    source={require("../../assets/img/camera.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Top bar Ends Here */}
            {/* User Name and address */}
            <View>
              <Text style={styles.userName}>{this.state.name}</Text>
              <Text style={styles.place}>San Fansisco, CA</Text>
            </View>
            {/* User Name and address ends here*/}
            <View style={styles.userDetailsBox}>
              <View style={styles.userDetails}>
                <View style={styles.userData}>
                  <Image
                    style={styles.emailIcon}
                    source={require("../../assets/img/email.png")}
                  />
                  <Text style={styles.textSize}>
                    lorren maddison@gmail.com{" "}
                  </Text>
                </View>
                <View style={styles.userData}>
                  <Image
                    style={[styles.emailIcon, styles.femaleIcon]}
                    source={require("../../assets/img/woman-i.png")}
                  />
                  <Text style={styles.textSize}>Female</Text>
                </View>
                <View style={styles.userData}>
                  <Image
                    style={[styles.emailIcon, styles.phoneIcon]}
                    source={require("../../assets/img/landline.png")}
                  />
                  <Text style={styles.textSize}>+1-541-754-3010 </Text>
                </View>

                <View style={styles.userData}>
                  <Image
                    style={[styles.emailIcon, styles.babyName]}
                    source={require("../../assets/img/doll.png")}
                  />
                  <Text style={styles.textSize}>Brad Maddison</Text>
                </View>

                <View style={styles.userData}>
                  <Image
                    style={[styles.emailIcon, styles.babyName]}
                    source={require("../../assets/img/cake.png")}
                  />
                  <Text style={styles.textSize}>1st December, 1990</Text>
                </View>

                <View style={styles.userData}>
                  <Image
                    style={[styles.emailIcon, styles.babyName]}
                    source={require("../../assets/img/stethoscope.png")}
                  />
                  <Text style={styles.textSize}>Dr. James Pattinson</Text>
                </View>

                <View style={[styles.userData, styles.lastData]}>
                  <Image
                    style={[styles.emailIcon, styles.babyAdd]}
                    source={require("../../assets/img/hospital.png")}
                  />
                  <Text style={styles.textSize}>
                    388 Market Street, Suite 1300, San Francisco, CA 94111
                  </Text>
                </View>
              </View>

              <View style={[styles.userDetails, styles.helpCenter]}>
                <View style={[styles.userData, styles.helpBox]}>
                  <Image
                    style={[styles.emailIcon, styles.babyAdd]}
                    source={require("../../assets/img/question.png")}
                  />
                  <Text style={styles.helpText}>Help</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    );
  }
}
