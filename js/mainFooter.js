const createMainFooter = () => {
  const mainFooter = document.querySelector(".mainFooter");

  mainFooter.innerHTML = `
    <footer class="mainFooter">    
        <section class="internalLink">
            <div class="footerContent">
                <span
                >2022 - Todos os direitos reservados | TESTE PARA DESENVOLVEDOR
                ASSISTENTE FRONTEND | CNPJ : 00.000.000/0000-00 BIRIGUI - SP</span
                >
                <img src="images/logo/logo.jpg" alt="" />
            </div>
        </section>
    </footer>
  `;
};

createMainFooter();
