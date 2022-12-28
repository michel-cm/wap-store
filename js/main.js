import { accordion } from "./accordion.js";
import { hoverMenuVerTodaLoja } from "./hoverMenuVerTodaLoja.js";
import { listarProdutos } from "./listagemProdutos.js";
import { scrollToTop } from "./scrollToTop.js";
import { cartEvents } from "./cart.js";

accordion();
hoverMenuVerTodaLoja();
listarProdutos();
scrollToTop();
cartEvents();

const overlayElement = document.querySelector(".overlayBackground");
const handleOpenMenuHamburger = () => {
  const buttonOpenMenu = document.querySelector(".areaButtonMenuResponsivo");
  const buttonCloseMenu = document.querySelector(
    ".areaMenuResponsive .menu-closer"
  );
  const refMenuElement = document.querySelector(".areaMenuResponsive");

  buttonOpenMenu.addEventListener("click", () => {
    overlayElement.style.zIndex = "99";
    overlayElement.style.display = "block";
    refMenuElement.classList.add("ativo");
  });

  buttonCloseMenu.addEventListener("click", () => {
    overlayElement.style.zIndex = "98";
    overlayElement.style.display = "none";
    refMenuElement.classList.remove("ativo");
  });
};
handleOpenMenuHamburger();

document.querySelector(".overlayBackground").addEventListener("click", () => {
  const areaMenuResponsive = document.querySelector(".areaMenuResponsive");

  if (areaMenuResponsive.classList.contains("ativo")) {
    overlayElement.style.zIndex = "98";
    overlayElement.style.display = "none";
    document.querySelector(".areaMenuResponsive").classList.remove("ativo");
  } else {
    overlayElement.style.zIndex = "98";
    overlayElement.style.display = "none";
    document.querySelector(".cart-area").classList.remove("ativo");
  }
});
