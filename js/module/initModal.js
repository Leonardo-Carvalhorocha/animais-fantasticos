export default class InitModal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(containerModal);
    this.class = 'ativo';

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);
  }

  abrirModal() {
    this.containerModal.classList.toggle(this.class);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.abrirModal();
  }

  cliqueForaDoModal(event) {
    if (event.target === this.containerModal) {
      this.abrirModal(event);
    }
  }

  addModalEvent() {
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaDoModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
