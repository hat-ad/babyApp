import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header";
import LogoImage from "../../components/LogoImage";
import ButtonTouchable from "../../components/ButtonTouchable";
import styles from "./styles";
import Service from "../../service/Service";
const image = require("../../assets/img/texture__sections.png");


export default class SelectChild extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      children: [],
    };
  }

  async componentDidMount() {
    Service.childList().then((resp) =>{
      console.log(resp);
      this.setState({ children: resp.data });
    });
  }


  render() {
    const { children } = this.state;
    return (
      <View style={styles.mainBody}>
        <ScrollView>
          <Header />
          <LogoImage />
          <SafeAreaView style={styles.container}>
            <View style={styles.selctChild}>
              <View style={styles.selctChildBoxTop}>
                <Image
                  style={styles.selectHandIcon}
                  source={require("../../assets/img/icon--select-child.png")}
                />
              </View>
              <Text style={styles.selectChildTextTop}>select child</Text>
            </View>

            
              <View style={styles.singleProfBox}>
                {/*<View style={[styles.leftChildBox, styles.singleChildBox]}>
                                  <View style={styles.childProfilePic}>
                                    <Image
                                      style={styles.eachChildProfilePic}
                                      source={require("../../assets/img/avatar__boy.png")}
                                    />
                                  </View>
                                  <Text style={styles.eachChildName}>brad maddison</Text>
                                  <Image
                                    style={styles.checkedIcon}
                                    source={require("../../assets/img/icon--selected.png")}
                                  />
                                </View>*/}



                {children.map((res, i) => (
                <TouchableOpacity style={styles.singleChildBox}>
                  <View style={styles.childProfilePic}>
                    <Image
                      style={styles.eachChildProfilePic}
                      source={require("../../assets/img/avatar__girl.png")}
                    />
                  </View>
                  <Text style={styles.eachChildName}>{res.first_name+' '+res.last_name}</Text>
                </TouchableOpacity>
                ))}
              </View>
            


            {/*<View style={[styles.singleProfBox, styles.secondRow]}>
                          <View style={[styles.leftChildBox, styles.singleChildBox]}>
                            <View style={styles.childProfilePic}>
                              <Image
                                style={styles.eachChildProfilePic}
                                source={require("../../assets/img/avatar__boy.png")}
                              />
                            </View>
                            <Text style={styles.eachChildName}>roger maddison</Text>
                          </View>
                          <View style={styles.singleChildBox}>
                            <View style={styles.childProfilePic}>
                              <Image
                                style={styles.eachChildProfilePic}
                                source={require("../../assets/img/avatar__girl.png")}
                              />
                            </View>
                            <Text style={styles.eachChildName}>cindy maddison</Text>
                          </View>
                        </View>*/}
          </SafeAreaView>
        </ScrollView>
        <View style={styles.informedContent}>
          {/* <Button style={styles.informedContentBtn} title="" /> */}
          {/* <Text style={styles.consentText}>Infromed consent button</Text> */}
        </View>
        <View style={styles.divider}></View>
        <View style={styles.userAgreement}>
          <Image
            style={styles.agreementIcon}
            source={require("../../assets/img/icon--info.png")}
          />
          <Text style={styles.userAgreementTxt}>
            I agree that I have read and understood the information provided in the registration email relating to use of this platform. I consent to my data being processed as described in this email and inline with the Privacy Policy{" "}
          </Text>
        </View>

        <View style={styles.footerBtn}>
          <View style={styles.continueBtn}>
            <ButtonTouchable text={"continue"} onPress={ () => this.props.navigation.navigate('Home')}/>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}></View>
      </View>
    );
  }
}
