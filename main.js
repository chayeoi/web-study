window.onload = () => {
  const menuButton = document.querySelector('#menu-button');
  const closeButton = document.querySelector('#close-button');
  const nav = document.querySelector('#nav');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    closeButton.classList.toggle('active');
    menuButton.classList.toggle('active');
  });
  closeButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    closeButton.classList.toggle('active');
    menuButton.classList.toggle('active');
  });
};
