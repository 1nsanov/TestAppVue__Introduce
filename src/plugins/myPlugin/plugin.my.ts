import { App } from "vue";
import My from "./my";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $my: My;
  }
}
const install = (app: App) => {
  const my = new My();
  app.config.globalProperties.$my = my;
};

const my = {
  install,
};

export default my;
