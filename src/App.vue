<template>
  <div class="dialog">
    <div class="dialog__close">x</div>
    <div class="container">
      <h1>Bucket list</h1>
      <ListItems :list="bucketList"/>
      <div class="dialog__footer">
        <button class="dialog__btn">Done</button>
      </div>
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
  --warning-clr: #FF5093;
  --dark-theme-clr: #002844;
  --light-theme-clr: #67889F;
  --light-activity-clr: #F5F5F5;
  --dark-activivity-clr: #CCD7DF;
}

body {
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark-theme-clr);
}

.dialog {
  width: 100%;
  max-width: 700px;

  border: 1px solid pink;
}

.dialog__close {
  text-align: right;
}

.dialog__footer {
  margin-top: 1em;
  padding: 2em 0 0;
  border-top: 1px solid #B5C5D0;
  text-align: center;
}

.dialog__btn {
  color: #ffffff;
  background-color: var(--dark-theme-clr);
  border-radius: 8px;
  padding: 0.75em 2.5em;
  border: none;
  font-weight: 700;
  font-size: 16px;
}

</style>
