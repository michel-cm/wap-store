import { accordion } from "./accordion.js";
import { hoverMenuVerTodaLoja } from "./hoverMenuVerTodaLoja.js";
import { listarProdutos } from "./listagemProdutos.js";
import { scrollToTop } from "./scrollToTop.js";
import { cartEvents } from "./cart.js";
import { handleMenuHamburger } from "./togleMenuHamburger.js";
import { handleClickOverlay } from "./eventsOverlay.js";

accordion();
hoverMenuVerTodaLoja();
listarProdutos();
scrollToTop();
cartEvents();
handleMenuHamburger();
handleClickOverlay();
