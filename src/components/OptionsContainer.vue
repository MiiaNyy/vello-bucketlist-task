<template>
  <!-- TODO!!
  Open options dialog next to the options button on bigger screens. Now it
  only opens from the bottom of the page -->

  <div class="options">
    <div class="options__header">
      <h3>{{ itemData.description }}</h3>
      <span class="btn__close"><i @click="toggleClose" class="fa-solid fa-xmark"></i></span>
    </div>
    <div class="options__flex options__action">
      <i class="fa-solid fa-calendar-day"></i>
      <p>Bucket item action 1</p>
    </div>
    <div class="options__flex options__action options__actions-del">
      <i class="fa-solid fa-xmark"></i>
      <p @click="removeBucketListItem(itemData)" class="options__delete-btn">Delete bucket item</p>
    </div>
  </div>
</template>

<script>


import BucketListAPI from "@/services/BucketListAPI";

export default {
  setup () {
    const removeBucketListItem = async (item) => {
      try {
        // TODO! Remove item from list view also when deleting. Now it is deleted from view after page is refeshed again
        const response = await BucketListAPI.deleteBucketListItem( item.uuid );
        console.log( `Deleted item "${ item.description }"!  ` )
        console.log( "Response from deleted item:", response )

      } catch ( e ) {
        console.log( e );
      }

    }
    return {
      removeBucketListItem
    }
  },
  name : "OptionsContainer",
  props : ['toggleClose', 'itemData', 'bucketList'],
}
</script>

<style scoped>

.options {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  max-width: 500px;
  padding: 1em 1.5em;
  background: #FFFFFF;
  box-shadow: 0px -1px 5px -2px rgba(0, 40, 68, 0.1), 0px -30px 51px -15px rgba(2, 57, 95, 0.15);
  border-radius: 32px 32px 0px 0px;
}

.options__header {
  display: flex;
  justify-content: space-between;
}

.options__flex {
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 1.5em 0;
}

.options__actions-del {
  color: var(--warning-clr);
}

.options__action:hover {
  cursor: pointer;
  opacity: 0.8;
}


@media (min-width: 600px) {

}

</style>
