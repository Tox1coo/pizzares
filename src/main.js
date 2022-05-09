import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import components from "@/components/UI";
import store from "./store";

let app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(store).use(router).mount("#app");
