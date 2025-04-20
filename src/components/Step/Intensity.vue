<script setup>
import { ref } from "vue";
const emit = defineEmits(["emission"]);

const levels = [
  "Barely noticeable",
  "Lingering thought",
  "Hard to ignore",
  "Really pulling me",
  "All I can think about",
];
const currentIndex = ref(-1);

function getClasses(index) {
  const classes = [`intensity-${index + 1}`];
  if (currentIndex.value === index) classes.push("selected");
  return classes.join(" ");
}

function handleClick(index) {
  currentIndex.value = index;
  emit("emission", { intensity: index + 1 });
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
      <div class="inner-circle">
        {{ currentIndex >= 0 ? currentIndex + 1 : "" }}
      </div>
      <div class="borderer"></div>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="top number-container">
          <div class="number three">3</div>
        </div>
        <div class="middle number-container">
          <div class="number">2</div>
          <div class="number">4</div>
        </div>
        <div class="top detail-container">
          <span>{{ levels[2] }}</span>
        </div>
        <div class="middle detail-container">
          <span>{{ levels[1] }}</span>
          <span>{{ levels[3] }}</span>
        </div>
        <div></div>
        <!-- <div></div> -->
        <div class="bottom number-container">
          <div class="number">1</div>
          <div class="number">5</div>
        </div>
        <div class="bottom detail-container">
          <span>{{ levels[0] }}</span>
          <span>{{ levels[4] }}</span>
        </div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<style scoped>
#intensity-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 5rem;
}

.overlay-container {
  position: absolute;
  width: 36rem;
  aspect-ratio: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  pointer-events: none;

  & .overlay {
    pointer-events: none;
    height: 50%;
    width: 100%;
    & div {
      display: flex;
      height: 12%;
      width: 100%;
    }
    .number {
      height: 2.4rem;
      width: 2.4rem;
      /* aspect-ratio: 1; */
      border-radius: 50%;
      background-color: var(--prussian);
      color: var(--light-vanilla);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .three {
      position: absolute;
      top: -1.2rem;
    }
    & .top {
      justify-content: center;
    }
    & .top.number-container {
      justify-content: center;
      align-items: flex-start;
      position: relative;
    }
    & .middle,
    .bottom {
      justify-content: space-between;
    }
    & .middle.number-container {
      align-items: center;
      padding: 0 18%;
    }
    & .middle.detail-container {
      align-items: flex-start;
      padding: 0 22%;
      margin-top: -10px;
      & span {
        width: 27%;
      }
    }
    & .bottom.detail-container {
      padding: 0 9%;
    }
    & .detail-container {
      /* width: 20%; */
      & span {
        color: #fff;
        font-size: 1.2rem;
        width: 22%;
        text-align: center;
        font-weight: 600;
      }
    }
  }

  & .mask {
    height: 50%;
    width: 100%;
    background-color: var(--light-vanilla);
  }
}

.scale-container {
  width: 36rem;
  aspect-ratio: 1;
  border: 2px solid var(--grey);
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
    cursor: pointer;
    &:hover {
      background-color: var(--thistle);
    }
  }

  & .intensity-1 {
    border: 0;
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
    display: flex;
    justify-content: center;
    padding-top: 10%;
    font-size: 3rem;
    color: var(--prussian);
  }
  & .borderer {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 10px solid var(--light-vanilla);
    z-index: 8;
    position: absolute;
    pointer-events: none;
  }
}
</style>
