const btn = document.getElementById('hamburger');
const links = document.querySelectorAll('.nav-link');

function ShowMenuItems() {
  const menu = document.querySelector('.list');
  menu.classList.toggle('show');
}

btn.addEventListener('click', ShowMenuItems);
links.forEach((link) => {
  link.addEventListener('click', ShowMenuItems);
});
