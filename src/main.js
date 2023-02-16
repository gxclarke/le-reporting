import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faEye,
  faPlay,
  faSquarePlus,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMagnifyingGlass, faEye, faPlay, faSquarePlus, faCircleInfo);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
