<script setup>
import { ref } from "vue"
const emit = defineEmits(["selected-intensity"])

const levels = ['Barely noticeable','Lingering thought','Hard to ignore','Really pulling me','All I can think about']
const currentIndex = ref(-1)

function getClasses(index) {
  const classes = [`intensity-${index + 1}`]
  if (currentIndex.value === index) classes.push('selected')
  return classes.join(' ')
}

function handleClick(index) {
  currentIndex.value = index
  emit('selected-intensity', index + 1)
}

</script>

<template>


  <div id="intensity-component">






    <div class="scale-container">
      <div
        v-for="(_, index) in levels"
        class="level"
        :class="getClasses(index)"
        @click="handleClick(index)"
      ></div>
      <div class="level blocker"></div>
      <div class="inner-circle"></div>
      <div class="borderer"></div>
    </div>
    <div class="details-container">
      <div
        v-for="level in levels"
        class="detail-container"
      >{{ level }}</div>

    </div>
  </div>
</template>

<style scoped>
  #intensity-component {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .scale-container {
    width: 90%;
    aspect-ratio: 1;
    /* border: 1px solid var(--thistle); */
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


    & .level {
      top: 0;
      height: 50%;
      width: 100%;
      position: absolute;
      transform-origin: center bottom;
      border: 3px solid var(--light-vanilla);
    }

    & .intensity-1 {
      background-color: var(--one);
      z-index: 1;
    }
    & .intensity-2 {
      background-color: var(--two);
      z-index: 2;
      transform: rotate(36deg);
    }
    & .intensity-3 {
      background-color: var(--three);
      z-index: 3;
      transform: rotate(72deg);
    }
    & .intensity-4 {
      background-color: var(--four);
      z-index: 4;
      transform: rotate(108deg);
    }
    & .intensity-5 {
      background-color: var(--five);
      z-index: 5;
      transform: rotate(144deg);
    }
    & .blocker {
      background-color: var(--light-vanilla);
      transform: rotate(180deg);
      z-index: 6;
    }
    & .inner-circle {
      width: 40%;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: var(--light-vanilla);
      z-index: 7;
    }
    & .borderer {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 10px solid var(--light-vanilla);
      z-index: 8;
      position: absolute;
    }
  }

  .details-container {
    display: flex;
    width: 90%;
    & div {
      padding: 4px;
      width: 20%;
      font-size: 1rem;
      text-align: center;

    }
  }
</style>