import Accordion from './module/initAccordion.js';
import ScrollSuave from './module/initScrollSuave.js';
import TabNav from './module/initTabNav.js';
import initModal from './module/initModal.js';
import initTooltip from './module/tooltip.js';
import initDropdownMenu from './module/dropdown-menu.js';
import initMenuMobile from './module/menu-mobile.js';
import initFuncionamento from './module/funcionamento.js';
import initFetchAnimais from './module/fetch-animais.js';
import initFetchBitcoin from './module/fetch-bitcoin.js';
import initAnimacaoScroll from './module/initAnimacaoScroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
