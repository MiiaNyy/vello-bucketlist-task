import axios from "axios";


const apiKey = process.env.VUE_APP_API_KEY;


export default (url='http://3.250.152.98:3000/api/item') => {
	return axios.create({
		baseURL: url,
		headers: {
			'api-key' : apiKey,
			
		}
	})
}
