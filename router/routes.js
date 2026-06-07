import Home from "./pages/home.js"; 
import About from "./pages/about.js";
import Projects from "./pages/projects.js";
import Contact from "./pages/contact.js";

const routes = [
  { path: "#/", view: Home },
  { path: "#/about", view: About },
  { path : "#/projects", view: Projects},
  { path : "#/contact", view:  Contact},
];

export default routes;