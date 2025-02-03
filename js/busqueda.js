// Lista de páginas con nombres y enlaces
const pages = [
    { name: "Home", url: "index.html" },
    { name: "About Us", url: "about.html" },
    { name: "Contact", url: "contact.html" },
    { name: "Services", url: "services.html" },
    { name: "Blog", url: "news.html" }
];

// Referencias a los elementos del DOM
const searchInput = document.getElementById('search-input'); // El campo de entrada de búsqueda
const searchResults = document.getElementById('search-results'); // La lista de resultados

// Evento para detectar cambios en el cuadro de búsqueda
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase(); // Obtiene el valor de la búsqueda
    searchResults.innerHTML = ''; // Limpia resultados anteriores

    if (query) {
        // Filtrar páginas que coincidan con la consulta
        const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));

        // Mostrar resultados
        filteredPages.forEach(page => {
            const listItem = document.createElement('li'); // Crear un nuevo elemento <li>
            listItem.innerHTML = `<a href="${page.url}">${page.name}</a>`; // Enlace al resultado
            searchResults.appendChild(listItem); // Agregar el <li> al <ul>
        });
    }
});

