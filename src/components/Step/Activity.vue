<script setup>
import Autocomplete from '../Autocomplete/Autocomplete.vue';

</script>

<template>
  <div id="activity-component">
    <Autocomplete
      :list="['Watching TV']"
      property="activity"
    ></Autocomplete>
  </div>
</template>

<style scoped>

</style>