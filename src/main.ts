import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import router from './router'
import my from './plugins/myPlugin/plugin.my'
import localization from './plugins/localization/plugin.localization'

const app = createApp(App).use(router)
app.use(my, {});
app.use(localization, {})

components(app)
app.mount('#app')