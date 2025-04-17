<script setup>
import Lateral from "../Button/Lateral.vue";
const emit = defineEmits(["back", "next"]);
</script>

<template>
  <div class="nav-buttons">
    <Lateral type="back" @click="emit('back')"></Lateral>
    <Lateral type="next" @click="emit('next')"></Lateral>
  </div>
</template>

<style scoped>
.nav-buttons {
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
}
</style>
