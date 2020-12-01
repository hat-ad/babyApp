// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack'
import MainTabNavigator from './MainTabNavigator';

import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SelectChild from '../screens/SelectChild';

export default 
	createStackNavigator({
		SelectChild : SelectChild,
		Main: MainTabNavigator,
	}
);
