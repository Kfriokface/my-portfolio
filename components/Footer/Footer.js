import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<div class="contact"><a href="mailto:design@albertosancho.es"><i class="fa-regular fa-envelope"></i> design@albertosancho.es</a></div>
<p class="copyright">© 2024 Alberto Sancho - Este proyecto ha sido realizado utilizando Vite</p>
<div>
  ${Button("Twitter", "brands", "x-twitter")}
  ${Button("GitHub", "brands", "github" )}
  ${Button( "LinkedIn", "brands", "linkedin")}
  ${Button("Telegram", "brands", "telegram" )}
</div>

`;