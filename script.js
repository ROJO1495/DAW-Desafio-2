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
  //************************************************************************** */
  //persona 3.a.b
  let transacciones = [];


//Funcion para calcular totales
function calcularSaldo() {
  let totalIngresos = 0;
  let totalEgresos = 0;

  //sumar ingresos y egresos 
  transacciones.forEach(transaccion => {
    if (transaccion.tipo === 'ingreso') {
      totalIngresos += transaccion.monto;
    } else if (transaccion.tipo === 'egreso') {
      totalEgresos += transaccion.monto;
    }
 });

 //Calcular saldo y porcentaje 
  const saldoTotal = totalIngresos - totalEgresos;
  const porcentajeGastos = totalIngresos > 0 ? (totalEgresos / totalIngresos) * 100 : 0; 
  return {
    totalIngresos,
    totalEgresos,
    saldoTotal,
    porcentajeGastos
 };
}

//Funcion para actualizar el resumen en el DOM
function actualizarUI() {
  const { totalIngresos, totalEgresos, saldoTotal, porcentajeGastos } = calcularSaldo();

  //Actualizar elementos del DOM
  document.getElementById('saldoTotal').textContent = `Saldo: ${saldoTotal >= 0 ? '+' : '-'} $${Math.abs(saldoTotal).toFixed(2)}`;
  document.getElementById('ingresosTotales').textContent = `Ingresos: + $${totalIngresos.toFixed(2)}`;
  document.getElementById('egresosTotales').textContent = `Egresos: - $${totalEgresos.toFixed(2)}`;
  document.getElementById('porcentajeGastos').textContent = `% Gastos: ${porcentajeGastos.toFixed(1)}%`;
}

//manejar el submit del formulario
document.getElementById('formTransaccion').addEventListener('submit', function(e) {
  e.preventDefault();

  const tipo = document.getElementById('tipo').value;
  const descripcion = document.getElementById('descripcion').value;
  const monto = parseFloat(document.getElementById('monto').value);

  // Crear nueva transacción
  const nuevaTransaccion = {
    tipo,
    descripcion,
    monto,
    id: Date.now() // ID único
  };

  // Agregar al array
  transacciones.push(nuevaTransaccion);

  // Actualizar UI y limpiar formulario
  actualizarUI();
  this.reset();
});

//funcionalidad de los tab
document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remover clase active de todos los tabs
    document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
    
    // Agregar clase active al tab clickeado
    this.classList.add('active');
    
    // Filtrar y mostrar transacciones según el tab
    const tabText = this.textContent.trim();
    if (tabText.includes('Ingresos')) {
      mostrarTransacciones('ingreso');
    } else {
      mostrarTransacciones('egreso');
    }
  });
});

function mostrarTransacciones(tipo) {
  const lista = document.getElementById('listaTransacciones');
  const transaccionesFiltradas = transacciones.filter(t => t.tipo === tipo);
  
  lista.innerHTML = transaccionesFiltradas.map(transaccion => `
    <div class="transaccion-item ${tipo}-row p-3 mb-2 rounded">
      <div class="d-flex justify-content-between align-items-center">
        <span>${transaccion.descripcion}</span>
        <span>$${transaccion.monto.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

  //Actualizar UI inicial
  actualizarUI();
   mostrarTransacciones('ingreso'); // Mostrar ingresos por defecto
  
});
