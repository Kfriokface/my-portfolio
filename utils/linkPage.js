export const linkPage = (id, page) => {
  const link = document.querySelector(id);
  link.addEventListener("click", () => {
    if (id === "#contactlink" || id === "#contactlinkLateral" ) {
      document.body.classList.add('contactPage');
    } else {
      if ( document.body.classList.contains('contactPage')) {
        document.body.classList.remove('contactPage');
      }
    }
    page()
  });
};