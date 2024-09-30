import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { mainSection, experiencesSection } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Divider } from "./components/Divider/Divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", mainSection);
linkPage("#projectslink", Projects);

mainSection();
experiencesSection();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());