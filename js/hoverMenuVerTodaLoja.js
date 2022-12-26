export const hoverMenuVerTodaLoja = () => {
  const btnOpenMenuElement = document.querySelector(".navItem-menuOpen");
  const menuVerTodaLojaElement = document.querySelector(".menuOpenEscondido");
  const overlayElement = document.querySelector(".overlayBackground");

  const hoverMenuOpenAction = () => {
    btnOpenMenuElement.addEventListener("mouseover", () => {
      menuVerTodaLojaElement.style.display = "block";
      overlayElement.style.display = "block";
    });
  };

  const hoverMenuCloseAction = () => {
    overlayElement.addEventListener("mouseover", () => {
      menuVerTodaLojaElement.style.display = "none";
      overlayElement.style.display = "none";
    });
  };

  hoverMenuOpenAction();
  hoverMenuCloseAction();
};
