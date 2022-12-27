import { accordion } from "./accordion.js";
import { hoverMenuVerTodaLoja } from "./hoverMenuVerTodaLoja.js";
import { listarProdutos } from "./listagemProdutos.js";
import { scrollToTop } from "./scrollToTop.js";

accordion();
hoverMenuVerTodaLoja();
listarProdutos();
scrollToTop();

const menuResponsivo = () => {
  const buttonOpenMenu = document.querySelector(".areaButtonMenuResponsivo");
  const buttonCloseMenu = document.querySelector(
    ".areaMenuResponsive .menu-closer"
  );
  const refMenuElement = document.querySelector(".areaMenuResponsive");

  buttonOpenMenu.addEventListener("click", () => {
    refMenuElement.classList.add("ativo");
  });

  buttonCloseMenu.addEventListener("click", () => {
    refMenuElement.classList.remove("ativo");
  });
};

menuResponsivo();
