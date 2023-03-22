// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const pMinimo = document.querySelector('#minimo');
const pMaximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    pMinimo: '',
    pMaximo: '',
    puertas: '',
    transmision: '',
    color: ''

}

// Events
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(); // Muestra los autos al cargar

    // Llena la opción de "Año"
    llenarSelect();
})

    // EventListener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();
})
pMinimo.addEventListener('change', e => {
    datosBusqueda.pMinimo = e.target.value;
})
pMaximo.addEventListener('change', e => {
    datosBusqueda.pMaximo = e.target.value;
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    console.log(datosBusqueda);
})

// Functions
function mostrarAutos() {
    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} / ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}
        `;

        // Insertar en el HTML los autos
        resultado.appendChild(autoHTML);
    })
}

    // Genera los años del select
function llenarSelect() {

    for( let i = max; i >= min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agg las opciones de Año al Select
    }
}

    // Función que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    console.log( resultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if( marca ){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if( year ){
        return auto.year === year;
    }
    return auto;
}