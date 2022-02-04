let miImagen = document.querySelector('img');
miImagen.onclick = function () {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'img/logoulagos.png') {
      miImagen.setAttribute('src','img/Teo_fun_oper_lineal.png');
    } else {
      miImagen.setAttribute('src', 'img/logoulagos.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenido ' + miNombre + ' a Algebra Lineal 1-2022, U Lagos';
  }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido ' + nombreAlmacenado + ' a Algebra Lineal 1-2022, U Lagos';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
