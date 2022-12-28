import { showOverlay } from "./eventsOverlay.js";

const overlayElement = document.querySelector(".overlayBackground");

export const handleMenuHamburger = () => {
  const buttonOpenMenu = document.querySelector(".areaButtonMenuResponsivo");
  const buttonCloseMenu = document.querySelector(
    ".areaMenuResponsive .menu-closer"
  );
  const refMenuElement = document.querySelector(".areaMenuResponsive");

  buttonOpenMenu.addEventListener("click", () => {
    showOverlay(99);
    refMenuElement.classList.add("ativo");
  });

  buttonCloseMenu.addEventListener("click", () => {
    overlayElement.style.zIndex = "98";
    overlayElement.style.display = "none";
    refMenuElement.classList.remove("ativo");
  });
};
