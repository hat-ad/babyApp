import React from "react";
import { Image, Text, View, TouchableOpacity, ScrollView, Modal, ImageBackground } from "react-native";
import Header from "../../components/Header";

import { GamesImgThumb } from "../../components/GamesImgThumb";
import Svg, { Path } from "react-native-svg";
import styles from "./styles";
import { Audio } from 'expo-av';
import ButtonTouchable from "../../components/ButtonTouchable";
import { GORDON3, GORDON4 } from "../../constants/Images";

const recording = new Audio.Recording();
const soundObject = new Audio.Sound();
export default class Games extends React.Component {

  constructor(props) {
    super(props);
    this.state = { uri:'', recordState: "Record", modalVisible: false, currentBackImg : '' };
  }

  async componentDidMount(){
    await Audio.requestPermissionsAsync();
  }

  startRecord = async () => {
    this.setState({ recordState: "Recording..." });
    try {
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
    } catch (error) {
      console.log(error);
    }
  }

  stopRecord = async () => {
    this.setState({ recordState: "Audio Recorded" });
    try {
      let a = await recording.stopAndUnloadAsync();
      var uri = await recording.getURI();
      this.setState({ uri: uri });
    } catch (error) {
      console.log(error);
    }
  }

  playRecord = async () =>{
    const playbackObject = await Audio.Sound.createAsync(
      { uri: this.state.uri },
      { shouldPlay: true }
    );
  }

  setModal = (bool, img) => {
    this.setState({modalVisible: bool, currentBackImg: img });
  }

  render() {
    const { recordState, modalVisible, currentBackImg } = this.state;
    return (
      <View style={{backgroundColor: 'white'}}>
        <ScrollView>
          <Header />
          <Text style={{paddingHorizontal: 35, fontSize: 12, fontStyle: 'italic'}}>
            Below we have a series of picture description tasks. When you select an image and press start a voice will ask your child to describe something in the image. Try not to prompt them too much. The recording will automatically finish after 20 secs. or press stop if your child just isn’t interested
          </Text>
          {/* End of Profile Picture */}

          <View style={{ display: 'flex', alignItems: "center"}}>

            <TouchableOpacity style={{ borderRadius: 15, alignItems:'center', marginHorizontal: 20, marginVertical: 10, overflow: "hidden"}} onPress={() => this.setModal(true, GORDON3)}>
              <Image source={GORDON3} resizeMode="cover" style={{width: 350, height: 180 }}/>
              <Text style={{position:"absolute", top: '60%', color: 'white'}}>{recordState}</Text>
            </TouchableOpacity>

            {recordState != "Record" &&
              <View style={{display: 'flex', flex: 1, flexDirection: "row", marginBottom: 100 }}>
              
              { recordState == "Audio Recorded" ? (
                  <View style={{width: 100}}>
                  <ButtonTouchable text={"Play"} onPress={() => this.playRecord()}/>
                  </View>
                ):(
                  <View style={{width: 100}}>
                    <ButtonTouchable text={"Stop"} onPress={() => this.stopRecord()}/>
                  </View>
                )
              }
              </View>
            }
              
            
            {/* <TouchableOpacity style={{ borderRadius: 15, marginHorizontal: 20, marginVertical: 10, overflow: "hidden"}}>
              <Image source={require('../../assets/img/img2.png')} resizeMode="cover" style={{width: 350, height: 180 }}/>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderRadius: 15, marginHorizontal: 20, marginVertical: 10, overflow: "hidden"}}>
              <Image source={require('../../assets/img/img3.png')} resizeMode="cover" style={{width: 350, height: 180 }}/>
            </TouchableOpacity> */}

          </View>

          <View style={{ display: 'flex', alignItems: "center"}}>

            <TouchableOpacity style={{ borderRadius: 15, alignItems:'center', marginHorizontal: 20, marginVertical: 10, overflow: "hidden"}} onPress={() => this.setModal(true, GORDON4)}>
              <Image source={GORDON4} resizeMode="cover" style={{width: 350, height: 180 }}/>
              <Text style={{position:"absolute", top: '60%', color: 'white'}}>{recordState}</Text>
            </TouchableOpacity>

            {recordState != "Record" &&
              <View style={{display: 'flex', flex: 1, flexDirection: "row", marginBottom: 100 }}>
              
              { recordState == "Audio Recorded" ? (
                  <View style={{width: 100}}>
                  <ButtonTouchable text={"Play"} onPress={() => this.playRecord()}/>
                  </View>
                ):(
                  <View style={{width: 100}}>
                    <ButtonTouchable text={"Stop"} onPress={() => this.stopRecord()}/>
                  </View>
                )
              }
              </View>
            }
              
            
            {/* <TouchableOpacity style={{ borderRadius: 15, marginHorizontal: 20, marginVertical: 10, overflow: "hidden"}}>
              <Image source={require('../../assets/img/img2.png')} resizeMode="cover" style={{width: 350, height: 180 }}/>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderRadius: 15, marginHorizontal: 20, marginVertical: 10, overflow: "hidden"}}>
              <Image source={require('../../assets/img/img3.png')} resizeMode="cover" style={{width: 350, height: 180 }}/>
            </TouchableOpacity> */}

          </View>
          
          <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              
            >
              <View style={styles.centeredView}>
                <ImageBackground source={currentBackImg} style={{width: "100%", height: "100%", backgroundColor: "#209FD9",}}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Record Audio</Text>

                    <TouchableOpacity
                      style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                      onPress={() => {
                        this.setModal(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Start</Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </Modal>

        </ScrollView>
      </View>
    );
  }
}
