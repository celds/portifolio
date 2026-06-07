import Home from "../Pages/home.js"; 
import About from "../Pages/about.js";
import Projects from "../Pages/projects.js";
import Contact from "../Pages/contact.js";

const routes = [
  { path: "#/", view: Home },
  { path: "#/about", view: About },
  { path : "#/projects", view: Projects},
  { path : "#/contact", view:  Contact},
];

export default routes;