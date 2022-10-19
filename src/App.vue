<template>
  <div class="dialog">
    <div class="dialog__close">x</div>
    <div class="container">
      <h1>Bucket list</h1>
      <ListItems :list="bucketList"/>
      <div class="dialog__footer"></div>
    </div>
  </div>

</template>

<script>

import { ref } from "vue";
import BucketListAPI from "@/services/BucketListAPI";
import ListItems from "@/components/ListItems";

export default {
  setup () {
    const bucketList = ref( '' );
    // Get request
    const loadBucketList = async () => {
      try {
        const response = await BucketListAPI.getBucketList();
        console.log( response );
        bucketList.value = response.data.data;

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
  components : { ListItems },
}
</script>

<style>
:root {
  warning-clr: #FF5093;
  dark-theme-clr: #002844;
  light-theme-clr: #67889F;
  light-activity-clr: #F5F5F5;
  dark-activivity-clr: #CCD7DF;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}


/*---TYPOGRAPHY---*/

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.dialog {
  width: 100%;
  max-width: 700px;

  padding: 0.5em 1em;
  border: 1px solid pink;
}

.dialog__close {
  text-align: right;
}



</style>
