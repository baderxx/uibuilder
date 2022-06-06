import { Theme, Language } from '~/store/enums'

export type RootState = {
  appVersion: string
  locale: Language
  isRtl: boolean
  theme: Theme
}
