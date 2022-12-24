export const accordion = () => {
  const accordionElement = document.querySelector(".js-accordion");
  const leiaMais = document.querySelector(".js-accordion-leiaMais");
  const reduzirTexto = document.querySelector(".js-accordion-reduzirTexto");

  const accordionAction = () => {
    accordionElement.classList.toggle("ativo");

    if (accordionElement.classList.contains("ativo")) {
      accordionElement.style.height = accordionElement.scrollHeight + 10 + "px";
    } else {
      accordionElement.style.height = 0;
    }

    changeStatusLeiaMais();
  };

  const changeStatusLeiaMais = () => {
    accordionElement.classList.contains("ativo")
      ? (leiaMais.innerText = "Reduzir Texto")
      : (leiaMais.innerText = "Leia mais >");
  };

  const handleReduzirText = () => {
    accordionAction();
    changeStatusLeiaMais();
  };

  leiaMais.addEventListener("click", accordionAction);

  reduzirTexto.addEventListener("click", handleReduzirText);
};
