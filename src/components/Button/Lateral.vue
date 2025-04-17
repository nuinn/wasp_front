<script setup>
defineProps({
  type: String,
});
const emit = defineEmits(["click"]);
</script>

<template>
  <div class="lateral" :class="type" @click="emit('click')">
    <svg
      v-show="type === 'back'"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#f5f1dd"
    >
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
    <span>{{ type === "back" ? "Back" : "Next" }}</span>
    <svg
      v-show="type === 'next'"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#f5f1dd"
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  </div>
</template>

<style scoped>
.lateral {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 4rem;
  width: 20rem;
  border-radius: 3rem;
  gap: 2rem;
  background-color: var(--teal);
  padding: 0 2rem;

  & span {
    color: var(--light-vanilla);
    font-weight: 600;
  }
}

.back {
  background-color: var(--moonstone);
  justify-content: flex-start;
}
</style>
