import { defineStore } from "pinia";

export const useLogStore = defineStore("crvLog", {
  state: () => ({
    intensity: 0,
    location: "",
    space: "",
  }),
  actions: {
    setIntensity(value) {
      intensity = value;
    },
    setLocation(value) {
      location = value;
    },
    setSpace(value) {
      space = value;
    },
  },
});
