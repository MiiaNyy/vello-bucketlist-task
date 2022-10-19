<template>
  <p>{{ bucketList }}</p>
  <button @click="changeStatus">Change Antarctica status</button>
</template>

<script>

import { ref } from "vue";
import BucketListAPI from "@/services/BucketListAPI";

export default {
  setup () {
    const bucketList = ref( '' );
    // Get request
    const loadBucketList = async () => {
      try {
        const response = await BucketListAPI.getBucketList();
        console.log( response );
        bucketList.value = response.data;

      } catch ( e ) {
        console.error( e );
      }
    }
    loadBucketList();


    return {
      bucketList,
    }
  },
  name : 'App',
  components : {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
