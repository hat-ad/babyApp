import Api from './Api';
import Auth from './Auth';

export default class Service {

	static generateLink = (data) => {
		return Api.post("magic-link/", data);
	};

	static login = async (data) => {
		var resp = await Api.post("login/", data);
		Auth.setUser(resp);
	};

	static profile = async () => {
		return Api.get("profile/");
	};

	static logout = async (data) => {
		return Api.post("logout/", data);
		Auth.logout();
	};

	static childList = async () => {
		return Api.get("children/");
	};

}
