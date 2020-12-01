import * as React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Welcome from "./screens/Welcome/welcome";
// import Profile from "./screens/Profile";
// import AppNavigator from './navigation/AppNavigator';
import BootomTab from './navigation/MainTabNavigator';
import Constants from 'expo-constants';
import SelectChild from './screens/SelectChild';
import IntroScreen from './screens/IntroScreen';
// import Branch, { BranchEvent } from 'expo-branch';
import Service from "./service/Service";
import { Provider } from 'react-redux';
import { store } from './configureStore';

const Stack = createStackNavigator();
const Tab = createStackNavigator()

function App() {
  console.log(Constants.appOwnership);
    if (Constants.appOwnership === 'standalone') {
      // const branch = await import('expo-branch') // tried react-native-branch here too

      Branch.subscribe(bundle => {
        if (bundle && bundle.params && !bundle.error) {
          console.log(bundle);
          alert(JSON.stringify(bundle));
          if(bundle.uri){
            var data = {
              "url": bundle.uri
            }
            Service.login(data);
          }
          // `bundle.params` contains all the info about the link.
        }
      });
    }
    

  const Home = () => {
    return (
      <Tab.Navigator
          headerMode="none"
          
        >
          {
            <Tab.Screen name="bootom" component={BootomTab} />
          }
          <Tab.Screen name="bootomTab" component={BootomTab} />
        </Tab.Navigator>
    );
  }
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SelectChild" component={SelectChild} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
  );
}

const styles = {
  container: {
    flex: 1,
  },
};

export default App;
