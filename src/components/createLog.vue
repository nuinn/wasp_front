<script setup>
import { ref, shallowRef } from "vue";

const currentStep = ref(0)

const steps = shallowRef([])

function next() {
  if (currentStep.value < steps.value.length) currentStep.value++
}

function back() {
  if (currentStep.value) currentStep.value--
}

</script>

<template>
  <component :is="steps[currentStep]"></component>

  <div class="nav-buttons">

  </div>

</template>

<style scoped>


</style>
