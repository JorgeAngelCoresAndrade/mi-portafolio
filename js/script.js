const articulos = [
  {
    nombre: "Resistencia 220Ω",
    descripcion: "Resistencia de carbón, ideal para proyectos electrónicos.",
    precio: 0.10,
    categoria: "Resistencias",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Resistor.jpg"
  },
  {
    nombre: "Microcontrolador Arduino Uno",
    descripcion: "Placa de desarrollo basada en ATmega328P.",
    precio: 25.00,
    categoria: "Microcontroladores",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg"
  },
  {
    nombre: "Capacitor 100µF",
    descripcion: "Capacitor electrolítico para filtrado de señales.",
    precio: 0.20,
    categoria: "Capacitores",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Electrolytic_capacitor.jpg"
  }
];

// Renderizar artículos en la página
const contenedor = document.getElementById("catalogo");

articulos.forEach(articulo => {
  const card = `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${articulo.imagen}" class="card-img-top" alt="${articulo.nombre}">
        <div class="card-body">
          <h5 class="card-title">${articulo.nombre}</h5>
          <p class="card-text">${articulo.descripcion}</p>
          <p><span class="badge bg-primary">${articulo.categoria}</span></p>
          <p class="fw-bold">Precio: $${articulo.precio.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `;
  contenedor.innerHTML += card;
});