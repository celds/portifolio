import routes from "./routes.js";
import renderHeader from "../components/header.js";
import renderFooter from "../components/footer.js";

const NotFound = () => `
  <div>
    <h1>404 - Page Not Found</h1>
    <a href="#/" data-link>Home</a>
  </div>
`;

export function initRouter() {
  function renderPage() {
    const app = document.getElementById("app");
    const headerEl = document.getElementById("header");
    const footerEl = document.getElementById("footer");

    if (!app) return;

    const path = window.location.hash || "#/";
    const currentPath = path.split("?")[0];

    const route = routes.find(r => r.path === currentPath);
    const page = route ? route.view : NotFound;

    app.innerHTML = `<div class="loader"></div>`;

    setTimeout(() => {
      app.innerHTML = typeof page === "function" ? page() : page;

      if (headerEl) {
        headerEl.innerHTML = renderHeader();
      }

      if (footerEl) {
        footerEl.innerHTML = renderFooter();
      }

      if (route?.init) {
        route.init();
      }
    }, 200);
  }

  renderPage();

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-link]");

    if (!link) return;

    event.preventDefault();
    window.location.hash = link.hash;
  });

  window.addEventListener("hashchange", renderPage);
}