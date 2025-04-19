<script setup>
import { ref, shallowRef } from "vue"
import textsData from "../data/texts.js"
import Intensity from "./Step/Intensity.vue"
import Navigate from './Navigate/Navigate.vue'

const currentStep = ref(0);

const steps = shallowRef([
  Intensity
]);
const texts = shallowRef([...textsData]);

function next() {
  if (currentStep.value < steps.value.length) currentStep.value++;
}

function back() {
  if (currentStep.value) currentStep.value--;
}
</script>

<template>
  <div id="log-wrap">
    <div class="instructions-container">
      <h1>{{ texts[currentStep].title }}</h1>
      <p>{{ texts[currentStep].detail }}</p>
    </div>

    <component :is="steps[currentStep]"></component>
    <Navigate @back="back" @next="next"></Navigate>
  </div>
</template>

<style scoped>
#log-wrap {
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .instructions-container {
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & h1 {
      font-family: 'Ovo', serif;
    }

    & p {
      font-size: 1.6rem;
    }
  }
}
</style>
