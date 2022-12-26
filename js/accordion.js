export const accordion = () => {
  const accordionElement = document.querySelector(".js-accordion");
  const leiaMais = document.querySelector(".js-accordion-leiaMais");
  const reduzirTexto = document.querySelector(".js-accordion-reduzirTexto");

  const refScroll = document.querySelector(".js-accordion-ref");

  const accordionAction = () => {
    accordionElement.classList.toggle("ativo");

    verifyHeight();

    changeStatusLeiaMais();
  };

  const verifyHeight = () => {
    if (accordionElement.classList.contains("ativo")) {
      accordionElement.style.height = accordionElement.scrollHeight + 10 + "px";
    } else {
      accordionElement.style.height = 0;
    }
  };

  const changeStatusLeiaMais = () => {
    accordionElement.classList.contains("ativo")
      ? (leiaMais.innerText = "Reduzir Texto")
      : (leiaMais.innerText = "Leia mais >");
  };

  function Position(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
  }

  const handleReduzirText = () => {
    leiaMais.scrollIntoView({ behavior: "smooth", });    
    accordionAction();
    changeStatusLeiaMais();
  };

  leiaMais.addEventListener("click", accordionAction);

  reduzirTexto.addEventListener("click", handleReduzirText);
};
