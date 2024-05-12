const url= './data.json';

fetch (url)
.then(res => res.json())
.then (data => mostrarProductos(data))

const contenedorProductos = document.querySelector('#container');


function mostrarProductos(productos) {
    productos.forEach(prod => {
        let card = document.createElement('div');

        card.innerHTML += `
        <div class="card col-md-3 bg-danger-subtle">
        <img class="card-img-top my-3" src=${prod.foto} alt=${prod.nombre}>
        <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="card-text">Precio: $ ${prod.precio}</p>
        <button class="btn btn-primary compra" id=${prod.id}>Comprar</button>
        </div>
    </div>
    `

    contenedorProductos.appendChild(card);
    });
}