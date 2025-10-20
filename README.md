# Aplicación de presupuesto mensual

Aplicación web para el control y gestión de ingresos y egresos personales, permitiendo visualizar el flujo de dinero mensual y calcular porcentajes de gastos.

## Descripción

Esta aplicación permite a los usuarios llevar un control detallado de sus finanzas personales mensuales. Los usuarios pueden registrar tanto ingresos como egresos, visualizar el balance total y analizar qué porcentaje de sus ingresos representan sus gastos.

## Características principales

- Visualización del mes actual con imagen de fondo personalizada
- Cálculo automático del saldo total (Ingresos - Egresos)
- Registro de transacciones (Ingresos y Egresos)
- Cálculo del porcentaje total de gastos sobre ingresos
- Visualización separada de ingresos y egresos mediante pestañas
- Cálculo del porcentaje individual que representa cada egreso
- Validación de campos para asegurar datos correctos
- Interfaz responsive adaptable a diferentes dispositivos
- Diseño intuitivo y fácil de usar

## Tecnologías utilizadas

- **HTML5** - Estructura de la aplicación
- **CSS3** - Estilos y diseño visual
- **JavaScript (Vanilla)** - Lógica de la aplicación
- **Bootstrap 5** - Framework CSS para diseño responsive

## Requisitos Previos

Para ejecutar esta aplicación solo es necesario:

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar Bootstrap desde CDN)

## Instalación y uso

1. **Clonar o descargar el repositorio**
```bash
   git clone https://github.com/ROJO1495/DAW-Desafio-2
```

2. **Navegar a la carpeta del proyecto**
```bash
   cd DAW-DESAFIO-2
```

3. **Abrir el archivo index.html**
   - Opción 1: Doble clic en el archivo `index.html`
   - Opción 2: Clic derecho → Abrir con → Navegador de preferencia
   - Opción 3: Usar Live Server en VS Code

Listo. La aplicación se ejecutará en el navegador.

## Estructura del Proyecto
```
DAW-DESAFIO-2/
│
├── index.html          # Estructura HTML principal
├── script.js           # Lógica JavaScript
├── style.css           # Estilos personalizados
│
├── ingresos.png        # Icono para ingresos
├── gastos.jpg          # Icono para egresos
│
└── [meses].jpg         # Imágenes de fondo por mes
    ├── enero.jpg
    ├── febrero.jpg
    ├── marzo.jpg
    └── ...
```

## Funcionalidades implementadas

### 1. Fecha y fondo dinámico
- El título muestra automáticamente el mes y año actual
- El fondo del encabezado cambia según el mes en curso

### 2. Gestión de transacciones
- **Agregar ingresos**: Registra entradas de dinero
- **Agregar egresos**: Registra gastos realizados
- Campos validados:
  - Tipo de transacción (Ingreso/Egreso)
  - Descripción obligatoria
  - Monto numérico con máximo 2 decimales

### 3. Cálculos automáticos
- **Saldo total**: Ingresos totales - Egresos totales
- **Total de ingresos**: Suma de todos los ingresos
- **Total de egresos**: Suma de todos los gastos
- **Porcentaje de gastos**: (Total Egresos × 100) / Total Ingresos

### 4. Visualización por pestañas
- **Pestaña Ingresos**: Lista todas las transacciones de ingreso
- **Pestaña Egresos**: Lista todos los gastos con su porcentaje individual

### 5. Validaciones Implementadas
- El monto debe ser un número válido
- El monto debe ser mayor a 0
- El monto debe tener máximo 2 decimales
- Descripción obligatoria
- Mensajes de error específicos y claros

## Fórmulas utilizadas

**Porcentaje total de gastos:**
```
% Egreso = (Total Egresos × 100) / Total Ingresos
```

**Porcentaje individual de cada egreso:**
```
% Detalle Egreso = (Monto Egreso × 100) / Total Ingresos
```

## Notas de desarrollo

- La aplicación utiliza JavaScript vanilla sin frameworks adicionales
- Los datos no persisten al recargar la página 
- El diseño es completamente responsive gracias a Bootstrap 5
- Todas las cifras se redondean a 2 decimales usando `toFixed(2)`

## Licencia

Este proyecto es de uso académico y educativo.

---
