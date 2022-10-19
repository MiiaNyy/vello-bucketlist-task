<template>
  <div class="dialog__list-container">
    <div class="table__container">

      <table>
        <tr>
          <th style="text-align: left">Done</th>
          <th></th>
          <th>Do before age</th>
          <th></th>
        </tr>

        <tr :ref="item.uuid" v-for="item in list" v-bind:key="item.uuid">
          <td>
            <label class="container">
              <input v-on:input="updateBucketListItem(item.uuid, item.done)" type="checkbox" v-model="item.done">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>{{ item.description }}</td>
          <td class="table-cell__age text-align-right">{{ item['do_before'] }}</td>
          <td class="text-align-right ">
            <i @click="toggleOptions(item)" class="fa-solid fa-ellipsis btn__options"></i>
          </td>
        </tr>

      </table>

      <OptionsContainer v-if="optionsOpen" :toggleClose="toggleOptions" :itemData="itemDataForOptions"
      />

    </div>
  </div>
</template>

<script>


import OptionsContainer from "@/components/OptionsContainer";
import BucketListAPI from "@/services/BucketListAPI";

export default {
  setup () {
    const updateBucketListItem = async (id, boolean) => {
      try {
        const response = await BucketListAPI.putBucketListItem( id, !boolean );
        console.log( `Updated item "${ response.data.description }". Item is now done? ${ response.data.done }  ` )

      } catch ( e ) {
        console.log( e );
      }
    }
    return {
      updateBucketListItem
    }
  },
  components : { OptionsContainer },
  data () {
    return {
      optionsOpen : false,
      // Item data that user just clicked to see more options
      itemDataForOptions : '',
      bucketList : '',
    }
  },
  methods : {
    toggleOptions (itemData) {
      this.optionsOpen = !this.optionsOpen;
      this.itemDataForOptions = itemData;
    },
  },
  props : ['list'],
  name : "ListItems"
}
</script>

<style scoped>

.borders {
  border: 2px solid pink;
}


table {
  width: 100%;
  max-width: 600px;
  padding: 0.5em 1em;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 1.2em;
  font-size: 14px;
}

th {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  text-align: right;
  letter-spacing: 0.25px;
}

td {
  vertical-align: center;
  padding: 0.5em 0;
  min-width: 20px;
}

.table__container {
  height: 100%;
  max-height: 700px;
  overflow-y: auto;
}

.text-align-right {
  text-align: right;
}

.table-cell__age {
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.5px;
}

.btn__options {
  font-size: 16px;
  padding: 3px;
  cursor: pointer;
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
}

.btn__options:hover {
  background-color: var(--dark-activivity-clr);
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  margin: 0 auto 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid var(--light-theme-clr);
  background-color: #ffffff;
  border-radius: 4px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: var(--light-activity-clr);
}

.container:active input ~ .checkmark {
  background-color: var(--dark-activivity-clr);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--dark-theme-clr);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media (min-width: 700px) {
  table {
    padding: 0;

  }

}

</style>
