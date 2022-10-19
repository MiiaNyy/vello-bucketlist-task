import API from "@/services/API";

export default {
	getBucketList () {
		return API().get( '/' );
	},
	
}
