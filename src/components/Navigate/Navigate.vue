<script setup>
import Lateral from "../Button/Lateral.vue";
const emit = defineEmits(["back", "next"]);
defineProps({
  canProgress: Boolean,
  canReturn: Boolean,
  skip: Boolean,
});
</script>

<template>
  <div class="nav-buttons">
    <Lateral
      :type="`back ${canReturn ? '' : 'disabled'}`"
      @click="emit('back')"
    ></Lateral>
    <Lateral
      :skip="skip"
      :type="`next ${canProgress ? '' : 'disabled'}`"
      @click="emit('next')"
    ></Lateral>
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
  position: absolute;
  z-index: 10;
  bottom: 2rem;
  left: 0px;
  right: 0px;
}
</style>
