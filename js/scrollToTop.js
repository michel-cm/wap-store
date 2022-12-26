export const scrollToTop = () => {
  let button = document.querySelector(".scrollToTop");
  let topRef = document.documentElement;

  const verifyHeightFromTop = () => {
    window.addEventListener("scroll", () => {
      topRef.scrollTop > 200
        ? button.classList.add("ativo")
        : button.classList.remove("ativo");
    });
  };
  verifyHeightFromTop();

  const handleScrollToTop = () => {
    button.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  handleScrollToTop();
};
