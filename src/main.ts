import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antd from "./antd";

createApp(App).use(antd).use(store).use(router).mount("#app");
