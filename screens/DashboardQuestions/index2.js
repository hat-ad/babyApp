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
import ChekboxMulti from "../../components/ChekboxMulti";
import BackButton from "../../components/BackButton";
import LogoText from "../../components/LogoText";
import SearchButton from "../../components/SearchButton";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Svg, { Path } from "react-native-svg";
import { RadioButton, Checkbox } from "react-native-paper";
import styles from "./styles";
import  { RadioGroup }  from 'react-native-multi-radio';
import Share from "../../service/Share";

const image = require("../../assets/img/texture__sections.png");

const logoIcon = require("../../assets/img/icon__questionnaire-title.png");

export default class DashboardQuestionsTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      genderOptions: ['Male', 'Female'],
      pageNo: 0,
      childAttend: [],
      additionalSupport: [],
      ifanyadditionalSupport: [],
      healthcareProfessionals: []
    };
  }

  handleChange = (e, name) => { console.log(e); this.setState({ [name]: e }); };
  radioChange = (val) => {
    console.log('radioChange', val);
  }

  checkboxChange = (name, val) => {
    console.log(name, val);
    var prevArr = this.state[name];
    var exist = Share.findInArr(prevArr, val);
    if(exist == -1){
      prevArr.push(val);
    }else{
      prevArr.splice(exist,1);
    }
    console.log(prevArr);
    this.setState({ [name]: prevArr });
  } 


  paginate(i){
    this.setState({ pageNo: i });
  }

  render() {
    const { pageNo, fname, lname, dob, genderOptions, childAttend, additionalSupport, ifanyadditionalSupport, healthcareProfessionals } = this.state;
    return (
      <View style={styles.mainBody}>
        <ScrollView>
          <View style={styles.topActions}>
            <BackButton />
            <SearchButton />
          </View>
          <Header />
          <LogoText source={logoIcon} text={"questionaries"} />
          <SafeAreaView style={styles.container}>
            
            <View style={styles.menuSections}>
              <TouchableOpacity style={[styles.singleMenu]}  onPress={() => this.props.navigation.navigate('DashboardQuestions')}>
                <View style={[styles.menutopDot]}></View>
                <Text style={[styles.menuText]}>
                  section A
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.singleMenu, styles.customSection]}>
                <View style={[styles.menutopDot, styles.currentActive]}></View>
                <Text style={[styles.menuText, styles.currentActive]}>section B</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.singleMenu} onPress={() => this.props.navigation.navigate('DashboardQuestionsThree')}>
                <View style={styles.menutopDot}></View>
                <Text style={styles.menuText}>section C</Text>
              </TouchableOpacity>
              {/*<View style={styles.singleMenu}>
                <View style={styles.menutopDot}></View>
                <Text style={styles.menuText}>section D</Text>
              </View>*/}
            </View>


            {pageNo == 0 ? (
              <View>
                
                <View style={styles.referredSection}>
                  <Text style={styles.referredByTxt}>
                    5. My child was referred by
                  </Text>
                </View>
                <View style={styles.referredBy}>
                  <RadioGroup 
                    name="referredBy"
                    options={['Parent or legal guardian', 'GP', 'Medical consultant', 'Public health nurse', 'Teacher', 'Preschool or Montessori leader', 'Creche', 'Others' ]} 
                    textLeft={false} 
                    onChange={this.radioChange} 
                    size={20} color={'#209FD8'}
                    //value={'EXAMPLE'}
                    viewStyle={{flexDirection: 'column', paddingLeft: 5}}
                    radioContainer={{}}
                    radioText={{ color: '#000' }}
                    radioDot={{ backgroundColor:"#209FD8" }}
                  />

                  <View style={styles.referredByOther}>
                    <Input placeholder="Please enter the name of the referrer..." />
                  </View>
                </View>
              </View>
            ):(
              <View>
                
                <View style={styles.referredSection}>
                  <Text style={styles.referredByTxt}>6. Does your child attend creche/preschool /school?</Text>
                  <ChekboxMulti 
                    options={['Does not attend', 'Full time creche…', 'Preschool or montessori (approximately 3hrs per day)', 'School' ]}
                    name={'childAttend'}
                    value={childAttend}
                    checkboxChange={this.checkboxChange}
                  />
                </View>

                <View style={styles.referredSection}>
                  <Text style={styles.referredByTxt}>7. Does your child receive any additional supports in their educational setting?</Text>
                  <ChekboxMulti 
                    options={['SNA', 'Resource teaching hours', 'Learning support', 'No' ]}
                    name={'additionalSupport'}
                    value={additionalSupport}
                    checkboxChange={this.checkboxChange}
                  />
                </View>

              </View>
            )}
            


            {pageNo == 0 ? (
              <View style={styles.continueBtn}>
                <ButtonTouchable text={"continue"} onPress={() => this.setState({ pageNo: 1 })}/>
              </View>
            ):(
              <View style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContents: 'space-between' }}>
                <View style={styles.continueBtnhalf}>
                  <ButtonTouchable text={"back"} onPress={() => this.setState({ pageNo: 0 })}/>
                </View>

                <View style={styles.continueBtnhalf}>
                  <ButtonTouchable text={"next"} onPress={() => this.setState({ pageNo: 0 })}/>
                </View>
              </View>
            )}
            

            <View style={styles.multiTabBottomUl}>
              <View style={[styles.multiTabBottomLi, pageNo >= 0 ? styles.currentActiveBottom : ""]}></View>
              <View style={[styles.multiTabBottomLi, pageNo >= 1 ? styles.currentActiveBottom : ""]}></View>
              {/*<View style={styles.multiTabBottomLi}></View>
              <View style={styles.multiTabBottomLi}></View>*/}
            </View>
            <View style={{ paddingTop: 80 }}></View>
          </SafeAreaView>
        </ScrollView>

        {/* <Footer /> */}
      </View>
    );
  }
}
