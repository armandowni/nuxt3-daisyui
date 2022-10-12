import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  return nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
