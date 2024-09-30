import "./Button.css";

export const Button = (icon = '', text) => `
<button class="my-btn">
<i class="fa-solid fa-${icon}" aria-hidden="true"></i>
<h4>${text}</h4>
</button>
`;