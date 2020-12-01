import Api from './Api';


export default class Share {

	static findInArr(arr, val){
		var returnVal = -1;
		for(var i=0; i < arr.length; i++){
			console.log("compage"+arr[i] +"=="+ val);
		  	if(arr[i] == val){
				returnVal = i;
				break;
			}
		}
		return returnVal;
	}

}
