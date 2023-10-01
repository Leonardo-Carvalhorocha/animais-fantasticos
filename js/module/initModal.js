export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(e) {
    e.preventDefault();
    containerModal.classList.add('ativo');
  }

  function fecharModal(e) {
    e.preventDefault();
    containerModal.classList.remove('ativo');
  }

  function cliqueForaDoModal(event) {
    if (event.target === this) {
      fecharModal(event);
    }
  }

  btnAbrir.addEventListener('click', abrirModal);
  btnFechar.addEventListener('click', fecharModal);
  containerModal.addEventListener('click', cliqueForaDoModal);
}
