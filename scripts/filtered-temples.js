// scripts/filtered-temples.js

// 1. Array de Templos (Solo tus 9 imágenes locales)
const temples = [
    {
        templeName: "Cardston Canada Temple",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923, August, 26",
        area: 88562,
        imageUrl: "images/cardston-canada-temple.jpg"
    },
    {
        templeName: "Hong Kong China Temple",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 21744,
        imageUrl: "images/hong-kong-china-temple.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-utah-temple.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-mexico-temple.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "images/paris-france-temple.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "images/roma-italia-temple.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/salt-lake-temple.jpg"
    },
    {
        templeName: "San Diego California Temple",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "images/san-diego-temple.jpg"
    },
    {
        templeName: "Washington D.C. Temple",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-templo.jpg" 
    }
];

// 2. Referencias al DOM
const templesContainer = document.querySelector('#temples-container');
const filterTitle = document.querySelector('#current-filter-title');

// 3. Función para crear la tarjeta del templo
function createTempleCard(temple) {
    let figure = document.createElement('figure');
    let h3 = document.createElement('h3');
    let pLocation = document.createElement('p');
    let pDedicated = document.createElement('p');
    let pArea = document.createElement('p');
    let img = document.createElement('img');

    h3.textContent = temple.templeName;
    pLocation.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    pDedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    pArea.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `Image of ${temple.templeName}`);
    img.setAttribute('loading', 'lazy'); // Native Lazy Loading
    img.setAttribute('width', '400');
    img.setAttribute('height', '250');

    figure.appendChild(h3);
    figure.appendChild(pLocation);
    figure.appendChild(pDedicated);
    figure.appendChild(pArea);
    figure.appendChild(img);
    
    return figure;
}

// 4. Función para mostrar (renderizar) los templos
function displayTemples(templesArray) {
    templesContainer.innerHTML = ''; // Limpiar el contenedor
    templesArray.forEach(temple => {
        const card = createTempleCard(temple);
        templesContainer.appendChild(card);
    });
}

// 5. Mostrar todos al inicio
displayTemples(temples);

// 6. Lógica de Filtrado (Event Listeners)
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar que la página recargue
        const filterId = event.target.id;
        let filteredArray = [];
        let title = "Home";

        switch (filterId) {
            case 'old':
                // Antes de 1900
                filteredArray = temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900);
                title = "Old Temples (Before 1900)";
                break;
            case 'new':
                // Después del 2000
                filteredArray = temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000);
                title = "New Temples (After 2000)";
                break;
            case 'large':
                // Mayor a 90000 sq ft
                filteredArray = temples.filter(t => t.area > 90000);
                title = "Large Temples (>90k sq ft)";
                break;
            case 'small':
                // Menor a 10000 sq ft
                filteredArray = temples.filter(t => t.area < 10000);
                title = "Small Temples (<10k sq ft)";
                break;
            default:
                // Home (Todos)
                filteredArray = temples;
                title = "Home - All Temples";
                break;
        }
        
        filterTitle.textContent = title;
        displayTemples(filteredArray);
    });
});

// 7. Footer y Menú Hamburguesa
document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector('#menuButton');
const mainNav = document.querySelector('#mainNav');

menuButton.addEventListener('click', () => {
    mainNav.classList.toggle('menu-open');
    menuButton.textContent = mainNav.classList.contains('menu-open') ? 'X' : '☰';
});