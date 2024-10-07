import "./Button.css";

export const Button = (text, type, icon = '') => `
<button id="${icon}" class="my-btn">
<i class="fa-${type} fa-${icon}" aria-hidden="true"></i>
<h4>${text}</h4>
</button>
`;