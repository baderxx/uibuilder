import { defineStore } from 'pinia'
import { RootState } from '~/store/types'
import { Theme, Language } from '~/store/enums'

export const useGlobalStore = defineStore({
  id: 'globalStore',

  // State
  state: () =>
    ({
      appVersion: '0.0.1-alpha',
      locale: Language.ENGLISH,
      theme: Theme.LIGHT,
      isRtl: false,
    } as RootState),

  // Actions
  actions: {
    changeVersion(version: string) {
      this.appVersion = version
    },
  },

  // Getters
  getters: {
    getAppVersion: (state) => {
      return state.appVersion
    },
  },
})
