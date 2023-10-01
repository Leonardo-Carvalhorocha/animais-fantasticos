export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        html.addEventListener('click', handleOutsideClick);
        element.removeAttribute(outside);
        callback();
      }
    }

    if (!element.hasAttribute(outside)) {
      html.addEventListener('click', handleOutsideClick);
      element.setAttribute(outside, '');
    }
  }

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((useEvent) => {
      menu.addEventListener(useEvent, handleClick);
    });
  });
}
