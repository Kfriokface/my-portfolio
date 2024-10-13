export const linkPage = (clase, page) => {
  const link = document.querySelector(clase);
  link.addEventListener("click", () => page());
};