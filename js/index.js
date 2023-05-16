let productosStock = [];

fetch("./js/productos.json")
      .then(response => response.json())
      .then(data =>{
        productosStock = data;
        cargarProductos(productosStock);
      })



let botonesAgregar = document.querySelectorAll(".producto-agregar")




// Cargamos todos los productos mediante js


const contenedor = document.getElementById("contenedor-productos");
const numero= document.querySelector(".numero");

function cargarProductos(productos) {
  contenedor.innerHTML = ""; // Eliminar productos actuales
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
      <div class="card">
        <img class="card-img-top card__img" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">$${producto.precio}</p>
          <button class="btn btn-primary producto-agregar" id="${producto.id}">Agregar al carrito</button>
        </div>
      </div>`;
    contenedor.appendChild(div);
  });
  actualizarBotonesAgregar();
}

//Mostrar los productos
cargarProductos(productosStock);


// Mostramos el valor en la barra del rango de precios

const priceRange = document.getElementById("price-range");
const priceOutput = document.getElementById("price-output");

//Mostramos los valores en pesos


priceRange.addEventListener("input", function () {
  priceOutput.textContent = "$" + Number(priceRange.value).toLocaleString('es');
});


// Filtramos por producto


document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  filtrarPorProducto();
});

function filtrarPorProducto() {
  const tipoProducto = document.getElementById("producto").value;
  const precioSeleccionado = Number(priceRange.value);

  if (tipoProducto === "Todos") {
    const productosFiltrados = productosStock.filter(producto => producto.precio <= precioSeleccionado);
    cargarProductos(productosFiltrados);
  } else {
    const productosFiltrados = productosStock.filter(producto => producto.producto === tipoProducto && producto.precio <= precioSeleccionado);
    cargarProductos(productosFiltrados);
  }
};


//Actualizamos los botones luego de que el dom los cargue
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar")

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito)
  });
}


let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumero();
}else { 
  productosEnCarrito = [];
}


function agregarAlCarrito(e) {
  Toastify({
    text: "Producto cargado",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #1892ca, #4cacd8)",
      textTransform:"uppercase"
    },
    offset: {
    x: "3rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    y: "10rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
  },
    onClick: function(){} // Callback after click
  }).showToast();

  const idBoton = e.currentTarget.id;
  const productoAgregado = productosStock.find(producto => producto.id === parseInt(idBoton));

  if (productosEnCarrito.some(producto => producto.id === parseInt(idBoton))) {

    productoAgregado.cantidad ++;

  } else{

    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumero();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}
function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc,producto) =>acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}