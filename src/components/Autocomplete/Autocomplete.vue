<script setup>
import { toRef } from "vue";

const props = defineProps({
  crvLog: Object,
  list: Array,
  property: String
})

const model = toRef(props.crvLog, props.property)
console.log()
</script>

<template>
  <div class="list-container">
    <input
      list="list"
      placeholder="Write new or choose existing"
      v-model="model"
    />
    <datalist id="list">
      <option v-for="item in list" :value="item"></option>
    </datalist>
  </div>
</template>

<style scoped>
.list-container {
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
</style>
