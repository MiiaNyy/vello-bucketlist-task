<template>
  <div class="dialog__list-container">

    <table>
      <tr>
        <th class="borders">Done</th>
        <th class="borders"></th>
        <th class="borders">Do before age</th>
        <th class="borders"></th>
      </tr>
      <tr v-for="item in list" v-bind:key="item.uuid">
        <td>{{ item.done }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item['do_before'] }}</td>
        <td>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </td>
      </tr>

    </table>
    <ul>
      <li v-for="listItem in list" v-bind:key="listItem.uuid">
        {{ listItem }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props : ['list'],
  name : "ListItems"
}
</script>

<style scoped>

.borders {
  border: 2px solid pink;
}

</style>
