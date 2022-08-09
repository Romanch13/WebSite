//Burger
let burger = document.getElementById('iconID');
let menu = document.querySelector('.nav-2');

function burgerMenu() {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('d-none');
    menu.classList.toggle('inherit');
  });
}
burgerMenu();
