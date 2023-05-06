const priceRange = document.getElementById("price-range");
const priceOutput = document.getElementById("price-output");

priceRange.addEventListener("input", function() {
  priceOutput.textContent = priceRange.value;
});



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

const contenedor = document.getElementById("contenedor-productos");
/* let contador = 0; */



function cargarProductos(){

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
 /*  if (contador % 3 === 0) {
    div.innerHTML = `<br>`
  } */
  contenedor.appendChild(div);
/*   contador++; */
});
}
cargarProductos();


/* const productosSection = document.querySelector('#productos-section');
const productosContainer = document.querySelector('#productos-container');

productosStock.forEach(producto => {
  const cardCol = document.createElement('div');
  cardCol.classList.add('col-md-4');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = producto.imagen;
  cardImg.classList.add('card-img-top');
  cardImg.alt = producto.titulo;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = producto.titulo;

  const cardDesc = document.createElement('p');
  cardDesc.classList.add('card-text');
  cardDesc.textContent = producto.descripcion;

  const cardPrecio = document.createElement('p');
  cardPrecio.classList.add('card-text');
  cardPrecio.textContent = `Precio: $${producto.precio}`;

  const btnAgregar = document.createElement('button');
  btnAgregar.classList.add('btn', 'btn-primary');
  btnAgregar.textContent = 'Agregar al carrito';

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDesc);
  cardBody.appendChild(cardPrecio);
  cardBody.appendChild(btnAgregar);

  card.appendChild(cardImg);
  card.appendChild(cardBody);

  cardCol.appendChild(card);

  productosContainer.appendChild(cardCol);
});

productosSection.appendChild(productosContainer); */


