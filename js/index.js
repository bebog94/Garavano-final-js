
const productosStock = [
  {
    id: 0,
    titulo: "Intel i7 11700k",
    producto: "Microprocesador",
    imagen: "./img/micro1.png",
    precio: 85000,
  },
  {
    id: 1,
    titulo: "AMD Ryzen 9 5900X",
    producto: "Microprocesador",
    imagen: "./img/micro2.png",
    precio: 90000,
  },
  {
    id: 2,
    titulo: "Intel Core i9-11900K",
    producto: "Microprocesador",
    imagen: "./img/micro3.png",
    precio: 95000,
  },
  {
    id: 3,
    titulo: "AMD Ryzen Threadripper 3990X",
    producto: "Microprocesador",
    imagen: "./img/micro4.png",
    precio: 400000,
  },
  {
    id: 4,
    titulo: "ASUS ROG Strix Z590-E",
    producto: "Motherboard",
    imagen: "./img/mother1.png",
    precio: 120000,
  },
  {
    id: 5,
    titulo: "Gigabyte X570 AORUS Elite",
    producto: "Motherboard",
    imagen: "./img/mother2.png",
    precio: 80000,
  },
  {
    id: 6,
    titulo: "MSI MPG B550 Gaming Carbon WiFi",
    producto: "Motherboard",
    imagen: "./img/mother3.png",
    precio: 95000,
  },
  {
    id: 7,
    titulo: "ASRock Z590 Taichi",
    producto: "Motherboard",
    imagen: "./img/mother4.png",
    precio: 125000,
  },
  {
    id: 8,
    titulo: "Corsair Vengeance RGB Pro 32GB (2 x 16GB)",
    producto: "Memoria RAM",
    imagen: "./img/memoria1.png",
    precio: 30000,
  },
  {
    id: 9,
    titulo: "G.Skill Ripjaws V 16GB (2 x 8GB)",
    producto: "Memoria RAM",
    imagen: "./img/memoria2.png",
    precio: 18000,
  },
  {
    id: 10,
    titulo: "HyperX Fury RGB 32GB (2 x 16GB)",
    producto: "Memoria RAM",
    imagen: "./img/memoria3.png",
    precio: 35000,
  },
  {
    id: 11,
    titulo: "Team T-Force Night Hawk RGB 16GB (2 x 8GB)",
    producto: "Memoria RAM",
    imagen: "./img/memoria4.png",
    precio: 20000,
  },
];

// Cargamos todos los productos mediante js


const contenedor = document.getElementById("contenedor-productos");

function cargarProductos(){
  contenedor.innerHTML = ""; // Eliminar productos actuales
productosStock.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add("col-md-4");
  div.innerHTML = `
  <div class="card">
  <img class="card-img-top card__img" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="card-body">
      <h5 class="card-title">${producto.titulo}</h5>
      <p class="card-text">$${producto.precio}</p>
      <button class="btn btn-primary" id="${producto.id}">Agregar al carrito</button>
    </div>
    </div>`;
  contenedor.appendChild(div);
});
}
cargarProductos();


// Mostramos el valor en la barra del rango de precios

const priceRange = document.getElementById("price-range");
const priceOutput = document.getElementById("price-output");

priceRange.addEventListener("input", function() {
  priceOutput.textContent = priceRange.value;
});


function filtrarPorProducto() {
  const tipoProducto = document.getElementById("producto").value;
  if (tipoProducto==="Todos"){
    cargarProductos(productosStock);
  } else {
    const prodcutosFiltrados = productosStock.filter(producto => producto.tipo === tipoProducto);
    cargarProductos(prodcutosFiltrados);
  }
}

document.getElementById("producto").addEventListener("change", function(e){
  e.preventDefault();
  filtrarPorProducto();
});
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  filtrarPorProducto();
});

cargarProductos(productosStock);


