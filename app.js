import { initRouter } from "./router/router.js";

function initApp() {

  initRouter();
}
document.addEventListener("DOMContentLoaded", initApp);
