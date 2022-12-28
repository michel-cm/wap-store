const overlayElement = document.querySelector(".overlayBackground");

export const showOverlay = (valueZindex) => {
  valueZindex ? (overlayElement.style.zIndex = valueZindex) : valueZindex;
  overlayElement.style.display = "block";
};

const closeOverlay = (valueZindex) => {
  valueZindex ? (overlayElement.style.zIndex = valueZindex) : valueZindex;
  overlayElement.style.display = "none";
};

export const handleClickOverlay = () => {
  document.querySelector(".overlayBackground").addEventListener("click", () => {
    const areaMenuResponsive = document.querySelector(".areaMenuResponsive");

    if (areaMenuResponsive.classList.contains("ativo")) {
      closeOverlay(98);
      document.querySelector(".areaMenuResponsive").classList.remove("ativo");
    } else {
      closeOverlay(98);
      document.querySelector(".cart-area").classList.remove("ativo");
    }
  });
};
handleClickOverlay();
