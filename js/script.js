import initAccordion from './module/initAccordion.js';
import ScrollSuave from './module/initScrollSuave.js';
import initTabNav from './module/initTabNav.js';
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

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
