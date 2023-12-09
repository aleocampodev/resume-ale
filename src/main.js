import { createApp } from 'vue/dist/vue.esm-bundler'
import { defineCustomElements as defineAnimatable } from '@proyecto26/animatable-component/loader'
import i18n from "./i18n/messages"
import App from './App.vue'

const app = createApp(App);

app.config.productionTip = false;
app.config.ignoredElements = [/animatable-\w*/];

defineAnimatable(window);

app.use(i18n);
app.mount('#app');
