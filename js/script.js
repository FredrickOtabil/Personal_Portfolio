const btn = document.getElementById('hamburger');
const links = document.querySelectorAll('.nav-link');
const closeMenu = document.getElementById('close-menu');

function ShowMenuItems(data) {
  const menu = document.querySelector('.list');
  if (data === 'btn') {
    menu.classList.toggle('show');
    btn.classList.add('hide');
    closeMenu.classList.add('show');
  } else if (data === 'link') {
    menu.classList.toggle('show');
    btn.classList.remove('hide');
    closeMenu.classList.remove('show');
  } else {
    menu.classList.remove('show');
    btn.classList.remove('hide');
    closeMenu.classList.remove('show');
  }
}

btn.addEventListener('click', () => ShowMenuItems('btn'));
links.forEach((link) => {
  link.addEventListener('click', () => ShowMenuItems('link'));
});
closeMenu.addEventListener('click', ShowMenuItems);
