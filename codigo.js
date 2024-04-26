const contenedorProds = document.getElementById('misprods');
const tablaBody = document.getElementById('tablabody');
const botonFinalizar = document.getElementById('finalizarBtn');
const botonVaciar = document.getElementById('vaciarBtn');




function renderizarProductos(productos) {
    for (const prod of productos) {
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
            const prodACarrito = productos.find(prod => prod.id == boton.id);
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
    //agregar calculo de total
    let totalAcumulado = carrito.reduce((acum, prod)=> acum + prod.precio,0);
    document.getElementById('total').innerText = 'Total a pagar $: '+totalAcumulado;
    }