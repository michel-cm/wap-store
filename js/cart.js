import { produtos } from "../data/produtos.js";
import { formateValue } from "./helpers/formateValue.js";
let cartList = [];

export const addToCart = (produtoId) => {
  let produtoSemelhante = cartList.findIndex(
    (produto) => produto.id == produtoId
  );

  if (produtoSemelhante > -1) {
    cartList[produtoSemelhante].qtd += 1;
  } else {
    cartList.push({
      id: produtoId,
      qtd: 1,
    });
  }

  updateCart();

  console.log(cartList);
};

const updateCart = () => {
  if (cartList.length == 0) {
    document.querySelector(".area-cart-vazio").classList.add("ativo");
    document.querySelector(".cart-area-ProdutoInfo").classList.remove("ativo");
  } else {
    let valorTotalCompra = 0;
    document.querySelector(".cart-area-ProdutoInfo").classList.add("ativo");
    document.querySelector(".area-cart-vazio").classList.remove("ativo");
    document.querySelector(".area--cart-by-model").innerHTML = "";

    for (let i in cartList) {
      let produtoItem = produtos.find(
        (produto) => produto.id == cartList[i].id
      );
      let produtoCartItem = document
        .querySelector(".models .model-produto-cartArea")
        .cloneNode(true);

      produtoCartItem.querySelector(".model-cart-img").src =
        produtoItem.imgProduto;
      produtoCartItem.querySelector(".model-cart-img").alt = produtoItem.nome;

      produtoCartItem.querySelector(".model-cart-nomeProduto").innerHTML = `
      ${
        produtoItem.nome
      }<br /><span class="model-cart-valorProduto">Valor unitário: ${formateValue(
        produtoItem.valor
      )}</span>
      `;

      valorTotalCompra += produtoItem.valor * cartList[i].qtd;

      produtoCartItem.querySelector(".cart-qtd-valor").innerHTML =
        cartList[i].qtd;

      document.querySelector(".model-cart-valorTotal").innerHTML =
        formateValue(valorTotalCompra);

      produtoCartItem
        .querySelector(".cart-qtd-menos")
        .addEventListener("click", () => {
          cartList[i].qtd > 1 ? cartList[i].qtd-- : cartList.splice(i, 1);
          updateCart();
        });
      produtoCartItem
        .querySelector(".cart-qtd-mais")
        .addEventListener("click", () => {
          cartList[i].qtd++;
          updateCart();
        });

      document.querySelector(".area--cart-by-model").append(produtoCartItem);
    }
    console.log(cartList);
  }
};

export const cartEvents = () => {
  const closeCart = () => {
    document.querySelector(".cart-area").classList.remove("ativo");
  };

  const openCart = () => {
    document.querySelector(".cart-area").classList.add("ativo");
  };

  document
    .querySelector(".cart-detales .menu-closer")
    .addEventListener("click", () => {
      closeCart();
    });

  document
    .querySelector(".meuCarrinhoCabecalho")
    .addEventListener("click", () => {
      openCart();
    });

  document
    .querySelector(".area-cart-vazio .continuarComprando")
    .addEventListener("click", () => {
      closeCart();
    });

    document.querySelector(".areaMenuResponsive .actionModal").addEventListener("click", () => {
      openCart();
      document.querySelector(".areaMenuResponsive").classList.remove("ativo");
    })

    document.querySelector(".areaAccountCartResponsive .cartMenu").addEventListener("click", () => {
      openCart();
    })
};
