import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar, NavbarLateral, showMenuLateral, overflow } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";



overflow(); 

const header = document.querySelector("header");
header.innerHTML = Navbar() + NavbarLateral();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
const body = document.querySelector("body");

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#contactlink", Contact);
linkPage("#homelinkLateral", Home);
linkPage("#projectslinkLateral", Projects);
linkPage("#contactlinkLateral", Contact);

Home();

changeTheme();
showMenuLateral();
