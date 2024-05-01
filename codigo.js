
let carrito = [];
const contenedorProds = document.getElementById('misprods');
const tablaBody = document.getElementById('tablabody');
const botonFinalizar = document.getElementById('finalizarBtn');
const botonVaciar = document.getElementById('vaciarBtn');



function renderizarProductos(listaProds) {
    for (const prod of listaProds) {
        contenedorProds.innerHTML += `
    <div class="card col-md-3 bg-danger-subtle">
        <img class="card-img-top my-3" src=${prod.foto} alt=${prod.nombre}>
        <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="card-text">Precio: $ ${prod.precio}</p>
        <button class="btn btn-primary compra" id=${prod.id}>Comprar</button>
        </div>
    </div>
        `
    }

    //eventos
    const botonesCompra = document.getElementsByClassName('compra');
    for (const boton of botonesCompra) {
        //opcion 1 - addEventListener()
        boton.addEventListener('click', () => {
            //buscar el objeto que tiene ese id
            const prodACarrito = listaProds.find(prod => prod.id == boton.id);
            console.log(prodACarrito);
            //cargar el producto al carrito de compras
            agregarACarrito(prodACarrito);
        })
    }
}

renderizarProductos(productos);

function agregarACarrito(producto) {
    carrito.push(producto);
    /* sweet alert */
    Swal.fire({
        title: "Felicitaciones!",
        text: `Agregaste ${producto.nombre} al carro 🛒`,
        imageUrl: producto.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: producto.nombre,
    });
    console.table(carrito);
    tablaBody.innerHTML += `
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>
    `

    let totalAcumulado = carrito.reduce((acum, prod) => acum + prod.precio,0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalAcumulado;
}

// //eventos de teclado
// const campoNombre = document.getElementById('nombre');
// const campoEmail = document.getElementById('email');

// //opcion 2
// campoNombre.onkeyup = () => {
//     if (campoNombre.value.length < 3) {
//         console.log('Nombre de menos de 3 letras 🚨');
//         campoNombre.style.color = 'red';
//     } else {
//         campoNombre.style.color = 'black';
//     }
// }
// //opcion 2
// campoNombre.onchange = () => {
//     alert('Cambio el nombre en el formulario');
//     if (campoNombre.value == 'pepe') {
//         campoNombre.value = '';
//     }
// }

// /*CON OPCION 1: campoNombre.addEventListener('change', ()=>alert) */

// campoEmail.addEventListener('input', () => {
//     if ((!campoEmail.value.includes('@')) || (!campoEmail.value.includes('.'))) {
//         document.getElementById('mensaje').innerText = 'Ingrese un email valido !'
//     } else {
//         document.getElementById('mensaje').innerText = ''
//     }
// })


// //opcion 3 que viene del html linea 66
// function borrarCampos() {
//     campoNombre.value = '';
//     campoEmail.value = '';
// }


// //evento submit del formulario
// const formulario = document.getElementById('formulario');

// formulario.addEventListener('submit', validar);

// function validar(ev) {
//     if ((campoNombre.value == '') || (campoEmail.value == '')) {
//         ev.preventDefault();
//         alert('Ingrese nombre o email faltante 🚨');
//     }
// }

//evento para finalizar la compra
botonFinalizar.onclick = () => {
    Swal.fire({
        title: "Gracias por tu compra",
        text: "Recibiras tu pedido en 48 hs",
        icon: "success"
      });

    vaciarCarro();
}

function vaciarCarro() {
    carrito = [];
    tablaBody.innerHTML = '';
    document.getElementById('total').innerText = 'Total a pagar $: ';
}

//vaciar carro
botonVaciar.onclick = () => {
    vaciarCarro();
}