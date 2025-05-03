<script setup>
defineProps({
  skip: Boolean,
  type: String,
});
const emit = defineEmits(["click"]);
</script>

<template>
  <div class="lateral" :class="type" @click="emit('click')">
    <svg
      v-if="type.includes('back')"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#f5f1dd"
    >
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
    <span>{{ skip ? 'Skip' : type.includes("back") ? "Back" : "Next" }}</span>
    <svg
      v-if="type.includes('next')"
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
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 45%;
  border-radius: 3rem;
  gap: 2rem;
  background-color: var(--teal);
  padding: 0 2rem;
  position: relative;
  cursor: pointer;
  transition: opacity .3s;

  & span {
    color: var(--light-vanilla);
    font-weight: 600;
  }
  & svg {
    position: absolute;
    right: 1.2rem;
  }
}

.back {
  background-color: var(--moonstone);
  & svg {
    left: 2rem;
  }
}

.disabled {
  opacity: 20%;
  cursor: not-allowed;
}
</style>
