const createMainCabecalho = () => {
  let mainCabecalho = document.querySelector(".mainCabecalho");

  mainCabecalho.innerHTML = `
    <header class="mainCabecalho">
      <section class="cabecalhoInfo">
        <div class="internalRow">
          <div class="AreaGroupCabecalho">
            <div class="logoAndInputArea">
              <div class="logo-area">
                <a href="#">
                  <img
                    src="images/logo/logo.jpg"
                    alt="Logotipo da WapStore"
                    class="cabecalhoInfo-logo"
                    title="Voltar para Home"
                  />
                </a>
              </div>
              <form action="#" id="busca" class="formSearch">
                <input
                  type="search"
                  name="busca"
                  class="formSearch-searchBox"
                  placeholder="Procure por produtos, marcas ou nomes..."
                />
                <button class="btn-search">
                  <img
                    src="images/icons/icon-buscar.svg"
                    alt="ícone de busca"
                  />
                </button>
              </form>
            </div>

            <div class="accountArea">
              <span class="styleTxtPrimary">Olá, bem vindo(a)!</span>
              <span class="styleTxtSecondary">
                <a href="#">Entre</a> ou <a href="">cadastre-se</a>
              </span>
            </div>

            <div class="meuCarrinhoCabecalho">
              <a href="#">
                <span class="styleTxtPrimary">Meu carrinho</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="cabecalhoMenu">
        <div class="internalRow">
          <nav class="navArea">
            <ul class="navMain">
              <li class="navItem-menuOpen">
                <a href="#" class="navItemLink-menuOpen">
                  <div class="iconHamburger">
                    <img src="images/icons/icon-hamburger.svg" alt="" />
                  </div>
                  <span class="styleTxtPrimary">Ver toda Loja</span>
                  <div class="iconArrow">
                    <img src="images/icons/icon-arrowDown.png" alt="" />
                  </div>
                </a>
              </li>
              <li class="navItem">
                <a href="#" class="navLinkItem">
                  <div class="iconHamburger">
                    <img src="images/icons/icon-ar.jpg" alt="" />
                  </div>
                  <span>Ar Condicionado</span>
                </a>
              </li>
              <li class="navItem">
                <a href="#" class="navLinkItem active">
                  <div class="iconHamburger">
                    <img src="images/icons/icon-eletro.jpg" alt="" />
                  </div>
                  <span>Eletrodomésticos</span>
                </a>
              </li>
              <li class="navItem">
                <a href="#" class="navLinkItem">
                  <div class="iconHamburger">
                    <img src="images/icons/icon-eletro2.jpg" alt="" />
                  </div>
                  <span>Eletroportáteis</span>
                </a>
              </li>
              <li class="navItem">
                <a href="#" class="navLinkItem">
                  <div class="iconHamburger">
                    <img src="images/icons/industria.jpg" alt="" />
                  </div>
                  <span>Comércio e Indústria</span>
                </a>
              </li>
              <li class="navItem">
                <a href="#" class="navLinkItem">
                  <div class="iconHamburger">
                    <img src="images/icons/icon-pecas.jpg" alt="" />
                  </div>
                  <span>Peças</span>
                </a>
              </li>
              <li class="navItem">
                <a href="#" class="navLinkItem">
                  <div class="iconHamburger">
                    <img src="images/icons/icon-ferramentas.jpg" alt="" />
                  </div>
                  <span>Máquinas e Ferramentas</span>
                </a>
              </li>
              <li class="navItem">
                <a href="#" class="navLinkItem navItem-natal">
                  <div class="iconHamburger">
                    <img src="images/icons/icon-natal.jpg" alt="" />
                  </div>
                  <span>Natal</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  `;
};

createMainCabecalho();