import { AsyncStorage } from 'react-native';

export default class Auth {

	static setUser = async (userData) => {
		await AsyncStorage.setItem('ksl_user_data', JSON.stringify(userData));
	};

	static getUser = async () => {
		const user = await AsyncStorage.getItem('ksl_user_data');
		return JSON.parse(user);
	};

	static userId = async () => {
		const user = await AsyncStorage.getItem('ksl_user_data');
		user = JSON.parse(user);
		return user.id;
	};

	static logout = async () => {
		return await AsyncStorage.removeItem('ksl_user_data');
	};

}