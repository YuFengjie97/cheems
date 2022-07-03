import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      mainHeight: 0,
    }
  },
  getters: {
    mainHeightWithoutPadding: (state) => state.mainHeight - 40,
  },
})
