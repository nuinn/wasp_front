<script setup>
import Autocomplete from '../Autocomplete/Autocomplete.vue';

</script>

<template>
  <div id="trigger-component">
    <Autocomplete
      :list="[]"
      property="trigger"
    >
    </Autocomplete>
  </div>
</template>