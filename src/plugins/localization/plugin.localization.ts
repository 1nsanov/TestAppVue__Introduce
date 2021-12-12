import { App } from "vue";
import { Store } from "vuex";
import Vuex from 'vuex';
import LocalizationDefault from "./localizationDefault";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $localization: Store<LocalizationDefault>;
  }
}
const install = (app: App) => {
  const localization = new Vuex.Store({
    state: new LocalizationDefault()
  })
  app.config.globalProperties.$localization = localization;
};

const localization = {
  install,
};

export default localization;
