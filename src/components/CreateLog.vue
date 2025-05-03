<script setup>
import { ref, computed } from "vue";
import formMap from "../data/formMap.js";
import Navigate from "./Navigate/Navigate.vue";
import { useLogStore } from "../stores/crvLog.js";

const crvLog = useLogStore();
const currentStep = ref(0);

const isUserInput = computed(() => {
  return formMap[currentStep.value].data.every((datum) =>
    Array.isArray(datum.property)
      ? crvLog[datum.property].length
      : crvLog[datum.property]
  )
});

const canProgress = computed(() => {
  return formMap[currentStep.value].canSkip || isUserInput;
});

function next() {
  if (currentStep.value < formMap.length) currentStep.value++;
  console.log("crvLog.$state", crvLog.$state);
}

function back() {
  if (currentStep.value) currentStep.value--;
}
</script>

<template>
  <div id="log-wrap">
    <div class="instructions-container">
      <h1>{{ formMap[currentStep].title }}</h1>
      <p>{{ formMap[currentStep].detail }}</p>
    </div>

    <component :is="formMap[currentStep].component"></component>
    <div class="navigate-housing">
      <Navigate
        :canProgress="canProgress"
        :canReturn="!!currentStep"
        :skip="!isUserInput"
        @back="back"
        @next="next"
      ></Navigate>
    </div>
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
      font-family: "Ovo", serif;
    }

    & p {
      font-size: 1.6rem;
    }
  }

  & .navigate-housing {
    height: 10rem;
  }
}
</style>
