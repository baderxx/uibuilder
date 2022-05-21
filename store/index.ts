import { defineStore } from 'pinia'

export type RootState = {
  appVersion: string
}

export const useGlobalStore = defineStore({
  id: 'globalStore',

  // State
  state: () => ({
    appVersion: '0.0.1-alpha'
  } as RootState),

  // Actions
  actions: {
    changeVersion(version: string) {
      this.appVersion = version
    }
  },

  // Getters
  getters: {
    getAppVersion: state => {
      return state.appVersion
    }
  }
})