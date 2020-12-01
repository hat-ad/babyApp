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
import Input from "../../components/Input";
import Service from "../../service/Service";
import Auth from "../../service/Auth";
import { connect } from 'react-redux';
import { setToken } from '../../actions';

const image = require("../../assets/img/texture__sections.png");

class IntroScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  async componentDidMount() {
    var a = await Auth.getUser();
    // alert(JSON.stringify(a));
    this.props.setToken("e7e3225e82d03ae4407193842c0968a279089de885083196e24ba35c72260693");
  }

  handleChange = (e, name) => { console.log(e); this.setState({ [name]: e }); };

  verifyEmail = async () => {
    this.props.navigation.navigate('SelectChild');
  }

  render() {
    const { email } = this.state;
    return (
      <View style={styles.mainBody}>
        <ScrollView>
          <Header />
          <LogoImage />
          <SafeAreaView style={styles.container}>
            

            <View style={[styles.singleProfBox, styles.secondRow]}>
              <View style={[styles.leftChildBox, styles.singleChildBox]}>
                <View style={styles.childProfilePic}>
                  <Image
                    style={styles.eachChildProfilePic}
                    source={require("../../assets/img/intro.jpg")}
                  />
                </View>
                <Text style={styles.eachChildName}>Please use the email you gave when referring your child for speech and language therapy.</Text>
              </View>
              
              <View style={styles.referredByOther}>
                <Input placeholder="Please enter your email here..." name="email" handleChange={this.handleChange} value={email}/>
                <TouchableOpacity style={styles.touchableBtn} onPress={ () => this.verifyEmail()}>
                    <Image
                        style={{width: 20, height: 20}}
                        source={require("../../assets/img/send.png")}
                    />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
        
        <View style={{ marginVertical: 10 }}></View>
      </View>
    );
  }
}

export default connect(
  state => ({
    
  }),{
    setToken
})(IntroScreen);
