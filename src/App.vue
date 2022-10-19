<template>
  <div class="dialog">
    <div class="dialog__close">
      <i class="fa-solid fa-xmark btn__close"></i>
    </div>

    <div>
      <div class="dialog__header">
        <h1>Bucket list</h1>
      </div>

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
    // Initial get request for items in the database
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

h1, h2, h3, h4, h5, h6, p {
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
  margin: 0 auto;
}

.dialog__close {
  text-align: right;
  padding: 1em 1.5em 0;
}

.dialog__header {
  width: 100%;
  max-width: 600px;
  padding: 0.5em 1em;
  margin: 0 auto;
}

.dialog__footer {
  width: 100%;
  margin: 1em auto 2em;
  padding: 2em 0;
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
  cursor: pointer;
}

.btn__close {
  color: #99A9B4;
  cursor: pointer;
}

.btn__close:hover {
  color: var(--warning-clr);
}

@media (min-width: 700px) {
  .dialog {
    box-shadow: 1px 1px 0 rgba(0, 40, 68, 0.09), 0 13px 48px -26.89px rgba(2, 57, 95, 0.2), 0 24px 51px -29.28px rgba(2, 57, 95, 0.23);
    border-radius: 17px;
    margin-top: 2em;
  }

  .dialog__footer {
    text-align: right;
  }

  .dialog__footer {
    width: 600px;
  }

}

</style>
