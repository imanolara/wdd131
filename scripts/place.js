// 1. FOOTER: Año actual y última modificación
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;


// 2. WIND CHILL (Sensación Térmica)

// Definimos variables estáticas (tal como pide la tarea)
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// Función para calcular Wind Chill (Fórmula Métrica)
function calculateWindChill(temp, wind) {
    // Fórmula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Lógica condicional para mostrar el cálculo o "N/A"
// Condiciones métricas: Temp <= 10°C y Viento > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    const chillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById('chill').textContent = `${chillFactor} °C`;
} else {
    document.getElementById('chill').textContent = "N/A";
}