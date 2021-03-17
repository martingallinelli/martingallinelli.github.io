// capturo el boton hamburguesa y el menu
const boton = document.getElementById('boton');
const menu = document.getElementById('menu');

// click sobre boton hamburguesa
boton.addEventListener('click', () => {
    // toggle - agregar/quitar clase
    menu.classList.toggle('hidden');
});