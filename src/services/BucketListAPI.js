import API from "@/services/API";

export default {
	getBucketList () {
		return API().get( '/' );
	},
	
	putBucketListItem (id, data) {
		return API().put( `/${ id }`,
			{ done : data },
		)
	},
	
	deleteBucketListItem (id) {
		return API().delete( `/${ id }` );
	}
	
}
