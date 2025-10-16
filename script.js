document.addEventListener("DOMContentLoaded", () => {
  const fondo = document.querySelector(".bg-mes");

  const fondosPorMes = {
    enero: "enero.jpg",
    febrero: "febrero.jpg",
    marzo: "marzo.jpg",
    abril: "abril.jpeg",
    mayo: "mayo.jpg",
    junio: "junio.jpg",
    julio: "julio.jpg",
    agosto: "agosto.jpg",
    septiembre: "septiembre.jpg",
    octubre: "octubre.jpg",
    noviembre: "noviembre.jpg",
    diciembre: "diciembre.jpg"
  };

  const mes = new Date().toLocaleDateString('es-ES', { month: 'long' }).toLowerCase();
  const imagen = fondosPorMes[mes];

  if (imagen && fondo) {
    fondo.style.backgroundImage = `url('${imagen}')`;
  }

  //Fecha actual
  const mesYAnio = new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  const fechaEl = document.getElementById("fechaActual");
  if (fechaEl) {
    fechaEl.textContent = mesYAnio;
  }
});