<template>
  <div class="options-dialog">
    <p>{{ itemData }}</p>
  </div>
</template>

<script>
export default {
  name : "OptionsContainer",
  props : ['toggleClose', 'itemData'],
}
</script>

<style scoped>

</style>
