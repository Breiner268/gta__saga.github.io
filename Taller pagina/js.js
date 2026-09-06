
// Títulos con salto de línea para simular el logo apilado
const titulos = [
    "GRAND<br>THEFT<br>AUTO<br>III", 
    "GRAND<br>THEFT<br>AUTO<br>VICE CITY", 
    "GRAND<br>THEFT<br>AUTO<br>SAN ANDREAS",
    "GRAND<br>THEFT<br>AUTO<br>IV",
    "GRAND<br>THEFT<br>AUTO<br>V",
    "GRAND<br>THEFT<br>AUTO<br>VI"
];

const clasesSlides = [
    "gta3-slide",
    "gtavc-slide",
    "gtasa-slide",
    "gta4-slide",
    "gta5-slide",
    "gta6-slide"
];

// Degradados
const gradientesJuegos = [
    "linear-gradient(to right, #9e9e9e, #e7aa00)", // Azul
    "linear-gradient(to right, #ff007f, #74b9ff)", // Rosa/Azul
    "linear-gradient(to right, #e67e22, #f1c40f)", // Naranja
    "linear-gradient(to right, #7f8c8d, #bdc3c7)", // Gris
    "linear-gradient(to right, #10b981, #f1c40f)", // Verde
    "linear-gradient(to right, #ff2a9d, #00e5ff)"  // Magenta/Cyan
];

const coloresSombra = [
    "rgba(207, 133, 20, 0.5)",
    "rgba(255, 0, 127, 0.5)",
    "rgba(230, 126, 34, 0.5)",
    "rgba(127, 140, 141, 0.5)",
    "rgba(16, 185, 129, 0.5)",
    "rgba(255, 42, 157, 0.5)"
];


// LÓGICA DEL MODO OSCURO (INTERRUPTOR)

const interruptor = document.getElementById('theme-toggle');
const fondoSwitch = document.getElementById('slider-bg');
const cuerpo = document.body;

if (interruptor.checked === true) {
    fondoSwitch.style.backgroundImage = gradientesJuegos[0]; 
}

interruptor.addEventListener('change', function() {
    if (interruptor.checked === true) {
        cuerpo.classList.add('dark-mode'); 
        fondoSwitch.style.backgroundImage = gradientesJuegos[juegoActual]; 
    } else {
        cuerpo.classList.remove('dark-mode'); 
        fondoSwitch.style.background = "#ccc"; 
        fondoSwitch.style.backgroundImage = "none";
    }
});


// LÓGICA DEL CARRUSEL

let juegoActual = 0; 

function cambiarJuego(numero) {
    juegoActual = numero; 

    // Textos: Usamos innerHTML para leer las etiquetas <br>
    document.getElementById('slide-title').innerHTML = titulos[juegoActual];

    // Imagen de fondo
    let bannerContent = document.getElementById('banner-content');
    bannerContent.className = 'banner-content ' + clasesSlides[juegoActual] + ' on';

    // Cambiar degradados en el Texto (Logo y Título)
    document.getElementById('brand-accent').style.backgroundImage = gradientesJuegos[juegoActual];
    document.getElementById('slide-title').style.backgroundImage = gradientesJuegos[juegoActual];

    // Cambiar color de la sombra brillante
    let banner = document.getElementById('banner');
    banner.style.boxShadow = "0px 20px 80px " + coloresSombra[juegoActual]; 

    // Cambiar color del Interruptor
    if (interruptor.checked === true) {
        fondoSwitch.style.background = "transparent";
        fondoSwitch.style.backgroundImage = gradientesJuegos[juegoActual];
    }

    // Actualizar puntitos
    const puntos = document.querySelectorAll('.dot');
    for (let i = 0; i < puntos.length; i++) {
        if (i === juegoActual) {
            puntos[i].classList.add('on'); 
        } else {
            puntos[i].classList.remove('on'); 
        }
    }
}

/*
// Rotación automática cada 5 segundos
setInterval(function() {
    let siguienteJuego = juegoActual + 1; 
    if (siguienteJuego > 5) {
        siguienteJuego = 0; 
    }
    cambiarJuego(siguienteJuego); 
}, 5000);*/