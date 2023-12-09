
import { createI18n } from "vue-i18n";
import es from '/src/locales/es.json'
import en from '/src/locales/en.json'


const messages = {
    es:es,
		en:en
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages
})