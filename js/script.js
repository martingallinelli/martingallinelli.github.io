/* MENU */
    // capturo el boton hamburguesa y el menu
    const boton = document.getElementById('boton');
    const menu = document.getElementById('menu');

    // click sobre boton hamburguesa
    boton.addEventListener('click', () => {
        // toggle - agregar/quitar clase
        menu.classList.toggle('hidden');
    });

/* AÑO SITIO WEB */
    var año = new Date().getFullYear();
    const mostrarAño = document.getElementById('año');
    mostrarAño.innerHTML = "&copy; " + año + ". All Rights Reserved.";