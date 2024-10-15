import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<div class="contact"><a href="mailto:design@albertosancho.es"><i class="fa-regular fa-envelope"></i> design@albertosancho.es</a></div>
<p class="copyright">© 2024 Alberto Sancho - Este proyecto ha sido realizado utilizando Vite</p>
<div>
  <a href="https://github.com/Kfriokface" target="_blank" alt="GitHub">${Button("GitHub", "brands", "github" )}</a>
  <a href="https://www.linkedin.com/in/alberto-sancho-351427331/" target="_blank" alt="Linkedin">${Button( "LinkedIn", "brands", "linkedin")}</a>
  <a href="https://t.me/Kfriokface" target="_blank" alt="Telegram">${Button("Telegram", "brands", "telegram" )}</a>
</div>

`;