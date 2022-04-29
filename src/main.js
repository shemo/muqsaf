import { createApp } from "vue";
import App from "@/App.vue";

import router from "./router";
import { createMetaManager } from "vue-meta";
import directives from "./directives/";
import "@/assets/styles/components/tooltip.scss";

import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);

// register all directives
directives(app);

// styles
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import AOS from "aos";
import "aos/dist/aos.css";

// mouting point for the whole app

createApp(App)
  .use(router)
  .use(createMetaManager())
  .use(Notifications)
  .use(AOS.init())
  .mount("#testApp");
