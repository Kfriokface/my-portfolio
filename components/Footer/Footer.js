import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("Twitter", "brands", "x-twitter")}
${Button("GitHub", "brands", "github" )}
${Button( "LinkedIn", "brands", "linkedin")}
${Button("Telegram", "brands", "telegram" )}
</div>
`;