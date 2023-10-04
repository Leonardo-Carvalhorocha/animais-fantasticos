import Accordion from './module/initAccordion.js';
import ScrollSuave from './module/initScrollSuave.js';
import TabNav from './module/initTabNav.js';
import InitModal from './module/initModal.js';
import Tooltip from './module/tooltip.js';
import initFuncionamento from './module/funcionamento.js';
import fetchAnimais from './module/fetch-animais.js';
import fetchBitcoin from './module/fetch-bitcoin.js';
import ScrollAnima from './module/scroll-anima.js';
import DropdownMenu from './module/dropdown-menu.js';
import MenuMobile from './module/menu-mobile.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const initModal = new InitModal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
initModal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
