import { produtos } from "../data/produtos.js";
import { formateValue } from "./helpers/formateValue.js";
import { addToCart } from "./cart.js";

export const listarProdutos = () => {
  const q = (element) => document.querySelector(element);
  const qa = (element) => document.querySelectorAll(element);

  const freteGratisExist = (produto, element) => {
    produto.freteGratis
      ? (element.style.display = "block")
      : (element.style.display = "none");
  };

  const selosProcelExist = (produto, element) => {
    produto.seloProcel
      ? (element.style.display = "block")
      : (element.style.display = "none");
  };

  const checkStars = (produto, element) => {
    produto.star
      ? (element.style.display = "flex")
      : (element.style.visibility = "hidden");
  };

  const showLoadingButtonaddToCard = (elementRef) => {
    const refContentButton = elementRef.outerHTML;
    elementRef.innerHTML = "Adicionando...";

    setTimeout(() => (elementRef.innerHTML = refContentButton ), 1000);
  };

  const handleAddToCart = (produtoId, element) => {
    element.addEventListener("click", () => {
      showLoadingButtonaddToCard(element);
      addToCart(produtoId);
    });
  };

  // listagem Produtos
  produtos.map((produto, index) => {
    const produtoItem = q(".models .model--produto-item").cloneNode(true);
    const areaProdutos = q(".areaProdutos-itens");

    produtoItem.setAttribute("data-key", produto.id);

    produtoItem.querySelector(".model--imgProduto").src = produto.imgProduto;
    produtoItem
      .querySelector(".model--imgProduto")
      .setAttribute("alt", produto.nome);
    produtoItem
      .querySelector(".model--imgProduto")
      .setAttribute("title", produto.nome);

    produtoItem.querySelector(".model--name").innerHTML = produto.nome;

    produtoItem.querySelector(
      ".model--desconto"
    ).innerHTML = `% ${produto.desconto}`;

    freteGratisExist(produto, produtoItem.querySelector(".seloFreteGratis"));

    checkStars(produto, produtoItem.querySelector(".model--stars"));

    produtoItem.querySelector(".model--imgMarca").src = produto.imgMarca;

    selosProcelExist(produto, produtoItem.querySelector(".model--imgSelo"));

    produtoItem.querySelector(".model--imgVoltagem").src = produto.imgVoltagem;

    produtoItem.querySelector(".model--valorVista").innerHTML = formateValue(
      produto.valor
    );

    produtoItem.querySelector(".model--valorPrazo").innerHTML = `
    ou ${formateValue(produto.valorPrazo)} em ${
      produto.parcelas
    } x de <br /> ${formateValue(produto.valorParcela)} sem juros`;

    handleAddToCart(produto.id, produtoItem.querySelector(".js-addToCart"));

    areaProdutos.append(produtoItem);
  });
};
