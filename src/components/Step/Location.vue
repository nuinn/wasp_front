<script setup>
import Autocomplete from "../Autocomplete/Autocomplete.vue";
import { useLogStore } from "../../stores/crvLog";

const crvLog = useLogStore();

const categories = ["At home", "Out", "At work", "Business trip"];

function getClasses(category) {
  if (!crvLog.location) return "";
  return category === crvLog.location
    ? "selected"
    : "unselected";
}

</script>

<template>
  <div id="location-component">
    <div class="category-carousel">
      <div
        v-for="category in categories"
        :class="getClasses(category)"
        @click="crvLog.location = category"
      >
        {{ category }}
      </div>
      <div>Add new +</div>
    </div>

    <Autocomplete
      v-if="crvLog.location"
      :list="['Living room', 'Bedroom', 'Office', 'Bathroom']"
      property="space"
    ></Autocomplete>
  </div>
</template>

<style scoped>
#location-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: calc(100% - 10rem); */
  padding: 2rem;
  gap: 5rem;

  & .category-carousel {
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 1.6rem;
    & div {
      height: 5rem;
      min-width: 8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      text-wrap: nowrap;
      padding: 1rem;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      margin-top: -2px;
      background-color: var(--one);
      color: var(--light-vanilla);
      color: var(--prussian);
      font-weight: 300;
      border-top: 1px solid var(--thistle);
      border-right: 1px solid var(--thistle);
      box-shadow: 1px 1px 4px var(--thistle);
      transition: 0.3s;
    }
    & div:last-child {
      background-color: #8bbaaf;
      color: #eee;
    }
    & .unselected {
      background-color: var(--light-vanilla);
      color: var(--grey);
    }
    & .selected {
      background-color: var(--moonstone);
      color: var(--light-vanilla);
      font-weight: 500;
    }
  }

  & .list-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 100%;
    border: 2px solid var(--aubergine);
    border-radius: 2rem;
    background-color: var(--vanilla);
    & input {
      height: 100%;
      width: 90%;
      border: none;
      outline: none;
      background-color: inherit;
      &::placeholder {
        color: var(--grey);
      }
    }
  }
}
</style>
