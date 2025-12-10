document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".navbar-menu");

    hamburger.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });

const colores = {
      "Negro": 0,
      "Marrón": 1,
      "Rojo": 2,
      "Naranja": 3,
      "Amarillo": 4,
      "Verde": 5,
      "Azul": 6,
      "Violeta": 7,
      "Gris": 8,
      "Blanco": 9
    };

    const multiplicadores = {
      "Negro": 1,
      "Marrón": 10,
      "Rojo": 100,
      "Naranja": 1000,
      "Amarillo": 10000,
      "Verde": 100000,
      "Azul": 1000000,
      "Violeta": 10000000,
      "Gris": 100000000,
      "Blanco": 1000000000,
      "Dorado": 0.1,
      "Plateado": 0.01
    };

    function llenarSelect(id, opciones) {
      const select = document.getElementById(id);
      for (let color in opciones) {
        const opt = document.createElement("option");
        opt.value = color;
        opt.textContent = color;
        select.appendChild(opt);
      }
    }

    llenarSelect("banda1", colores);
    llenarSelect("banda2", colores);
    llenarSelect("multiplicador", multiplicadores);

    document.getElementById("calcular").addEventListener("click", () => {
      const b1 = colores[document.getElementById("banda1").value];
      const b2 = colores[document.getElementById("banda2").value];
      const mult = multiplicadores[document.getElementById("multiplicador").value];

      const valor = ((b1 * 10) + b2) * mult;

      document.getElementById("resultado").textContent = 
        "Valor de la resistencia: " + valor + " Ω";
    });