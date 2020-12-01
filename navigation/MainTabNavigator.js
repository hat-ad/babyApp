import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { profile } from '../constants/Images';
import Profile from '../screens/Profile';
import welcome from '../screens/Welcome';
import Games from '../screens/Games';
import Section from '../screens/Sections';
import DashboardQuestions from '../screens/DashboardQuestions';
import DashboardQuestionsTwo from '../screens/DashboardQuestions/index2';
import DashboardQuestionsThree from '../screens/DashboardQuestions/index3'
import TipsList from '../screens/TipsList';
import TipsNAdvice from '../screens/TipsNAdvice';

import Notification from "../screens/Notification";
import Help from "../screens/Help"
import Faq from "../screens/Faq";

const BottomTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const GameStack = () => (
  <Navigator headerMode="none">
    <Screen name="Section" component={Section} />
    <Screen name="Games" component={Games} />
    <Screen name="DashboardQuestions" component={DashboardQuestions} />
    <Screen name="DashboardQuestionsTwo" component={DashboardQuestionsTwo} />
    <Screen name="DashboardQuestionsThree" component={DashboardQuestionsThree} />
    <Screen name="TipsList" component={TipsList} />
    <Screen name="TipsNAdvice" component={TipsNAdvice} />
  </Navigator>
)

const NotificationStack = () => (
  <Navigator headerMode="none">
      <Screen name="Notification" component={Notification} />
  </Navigator>
)


const ProfileStack = () => (
    <Navigator headerMode="none">
        <Screen name="Profile" component={Profile} />
        <Screen name="Faq" component={Faq} />
    </Navigator>
)

const HelpStack = () => (
    <Navigator headerMode="none">
        <Screen name="News" component={Help} />
    </Navigator>
)


function MyTabs(props) {
    return (
        <BottomTab.Navigator
            // initialRouteName="Home"
            activeColor="#fff"
            inactiveColor="#707070"
            sceneAnimationEnabled={true}
            barStyle={{
                // backgroundColor: '#3c9fd9',
                borderWidth: 0.5,
                borderBottomWidth: 1,
                backgroundColor:'#3c9fd9',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                borderColor: 'transparent',
                overflow: 'hidden',
                // borderTopColor: '#000',
                // borderTopLeftRadius: 100,
                // height: 60
            }}
        >
            
          <BottomTab.Screen name="GamesScreen" component={GameStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                  <Image style={{ height: 25, width: 25, resizeMode: "contain" }} source={require('../assets/img/gicon.png')} />
              ),
            }}
          />

          <BottomTab.Screen name="ProfileScreen" component={ProfileStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                  <Image style={{ height: 25, width: 25, resizeMode: "contain" }} source={require('../assets/img/picon.png')} />
              ),
            }}
          />

          <BottomTab.Screen name="NotificationScreen" component={NotificationStack}
            options={{
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color }) => (
                  <Image style={{ height: 25, width: 25, resizeMode: "contain" }} source={require('../assets/img/bicon.png')} />
              ),
            }}
          />

          <BottomTab.Screen name="QuestionsScreen" component={HelpStack}
            options={{
              tabBarLabel: 'Questions',
              tabBarIcon: ({ color }) => (
                  <Image style={{ height: 25, width: 25, resizeMode: "contain" }} source={require('../assets/img/aicon.png')} />
              ),
            }}
          />
        </BottomTab.Navigator>
    );
}
export default MyTabs;
