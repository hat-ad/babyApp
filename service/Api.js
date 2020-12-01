const axios = require('axios');
const baseUrl = "https://ksl-share-staging.herokuapp.com/api/v1/";
import { store } from '../configureStore';


export default class Api {

	static get = async (url) => {
		var state = store.getState();
		console.log('state',baseUrl+url);
		console.log('token -->',state.reducer.token);
		return new Promise((resolve, reject) => {
			var headers = {
				"Content-Type" : "application/json",
				"Authorization": 'Token ' + state.reducer.token
			};
		    axios.get(baseUrl+url, {headers}).then(function (response) {
			    resolve(response);
			}).catch(function (error) {
			    reject(error);
			}).finally(function () {
			    // always executed
			});

		});

	};

	static post = async (url, data) => {
		console.log(baseUrl+url);
		console.log(data);
		var state = store.getState();
		return new Promise((resolve, reject) => {
			var headers = {
				"Content-Type" : "application/json",
				"Authorization": 'Token ' + state.reducer.token
			};
			axios.post(baseUrl+url, data).then((response) => {
				resolve(response);
			}).catch((error) => {
				console.log('post api error', error);
				reject(error);
			});
		});
	};
}
