document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const container = document.querySelector('.container');
    const videoList = document.querySelector('.video-list');
    const searchInput = document.getElementById('search'); // Campo de búsqueda
    const searchContainer = document.getElementById('search-container'); // Contenedor del buscador
    const serverSelect = document.getElementById('server-select'); // Selector de servidor
    const toggleButton = document.getElementById('toggle-list-btn');
    let currentIndex = 0;
    let channelSelected = false;
    let listVisible = false;
    let currentSources = []; // Fuentes actuales del canal
    let listVideo = [];

    // Función para filtrar los canales según la búsqueda
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.dataset.title.toLowerCase();
            if (title.includes(filter)) {
                video.style.display = ""; // Mostrar el video si coincide
            } else {
                video.style.display = "none"; // Ocultar si no coincide
            }
        });
    });

    // Crear lista de videos a partir de canales.js
    canales.forEach((canal, index) => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid');
        videoElement.dataset.sources = JSON.stringify(canal.sources);
        videoElement.dataset.title = canal.title;

        videoElement.innerHTML = `
            <img src="${canal.imgSrc}" alt="${canal.title}" />
            <h4 class="title">${canal.title}</h4>
        `;

        videoListContainer.appendChild(videoElement);
    });

    listVideo = document.querySelectorAll('.video-list .vid'); // Actualizar después de crear la lista

    // Función para cargar un canal inicial al cargar la página
    function loadInitialChannel() {
        const initialChannel = canales[0].sources[0];
        changeIframeSource(initialChannel);
        title.textContent = canales[0].title;
        populateServerSelect(canales[0].sources);
    }

    loadInitialChannel();

    // Función para cambiar la fuente del iframe de video
    function changeIframeSource(source) {
        const newIframe = document.createElement('iframe');
        newIframe.id = 'reproductor';
        newIframe.src = source;
        newIframe.allow = 'autoplay; encrypted-media';
        newIframe.allowFullscreen = true;

        mainVideo.parentNode.replaceChild(newIframe, mainVideo);
        mainVideo = newIframe;
    }

    // Función para llenar el select con los servidores, con indicación de anuncios
    function populateServerSelect(sources) {
        serverSelect.innerHTML = ''; // Limpia las opciones
        currentSources = sources; // Almacena las fuentes actuales
    
        sources.forEach((source, index) => {
            const option = document.createElement('option');
            option.value = index;
    
            // Verifica si la URL contiene 'streamtp.live', 'la10hd.com', o 'nebunexa.co' para agregar "(ads)"
            if (source.includes('streamtp.live') || source.includes('la10hd.com') || source.includes('nebunexa.co')) {
                if (source.includes('star.nebunexa.com')) {
                    option.textContent = `Op ${index + 1}.ext`; // Para star.nebunexa.com, asigna ".ext"
                } else {
                    option.textContent = `Op ${index + 1}.ads`; // Para las demás, asigna ".ads"
                }
            } else {
                option.textContent = `Op ${index + 1}`; // Opciones sin anuncios ni extensiones especiales
            }
    
            serverSelect.appendChild(option);
        });
    }

    // Cambia la URL del iframe cuando se selecciona un servidor
    serverSelect.addEventListener('change', (event) => {
        const selectedSourceIndex = event.target.value;
        const selectedSource = currentSources[selectedSourceIndex];
        changeIframeSource(selectedSource);
    });

    // Función para cambiar el canal resaltado
    function highlightChannel(index) {
        listVideo.forEach(video => video.classList.remove('active'));
        listVideo[index].classList.add('active');
        listVideo[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Mostrar la lista de canales y el buscador
    function showChannelListAndSearch() {
        container.classList.add('show-list');
        videoList.style.transform = 'translateX(0)';
        searchContainer.style.display = 'block';
        channelSelected = false;
        listVisible = true;
    }

    // Ocultar la lista de canales y el buscador
    function hideChannelListAndSearch() {
        container.classList.remove('show-list');
        videoList.style.transform = 'translateX(100%)';
        searchContainer.style.display = 'none';
        listVisible = false;
    }

    function forceHideChannelListAndSearch() {
        if (listVisible) {
            hideChannelListAndSearch();
        }
    }

    // Nueva función para el botón que alterna la visibilidad de la lista y el buscador
    toggleButton.addEventListener('click', () => {
        if (listVisible) {
            hideChannelListAndSearch();
        } else {
            showChannelListAndSearch();
        }
    });

    // Evitar que la lista y el buscador se oculten al hacer clic dentro de ellos
    document.addEventListener('click', (event) => {
        if (!videoList.contains(event.target) && !searchContainer.contains(event.target) && !toggleButton.contains(event.target)) {
            forceHideChannelListAndSearch();
        }
    });

    // Maneja la navegación por la lista de canales con el teclado
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowRight':
                showChannelListAndSearch();
                break;
            case 'ArrowLeft':
                forceHideChannelListAndSearch();
                break;
            case 'Escape':
                forceHideChannelListAndSearch();
                break;
            case 'ArrowDown':
                if (listVisible && currentIndex < listVideo.length - 1) {
                    currentIndex++;
                    highlightChannel(currentIndex);
                }
                break;
            case 'ArrowUp':
                if (listVisible && currentIndex > 0) {
                    currentIndex--;
                    highlightChannel(currentIndex);
                }
                break;
            case 'Enter':
                if (listVisible) {
                    listVideo[currentIndex].click();
                    channelSelected = true;
                    forceHideChannelListAndSearch();
                }
                break;
            default:
                break;
        }
    });

    // Evento para cambiar de video al hacer clic en un canal
    listVideo.forEach((video, index) => {
        video.addEventListener('click', () => {
            const sources = JSON.parse(video.dataset.sources);
            changeIframeSource(sources[0]);
            title.textContent = video.dataset.title;
            currentIndex = index;
            populateServerSelect(sources); // Actualiza el selector de servidores
        });
    });

    // Función para recargar el iframe
    const reloadButton = document.getElementById('reload-btn');
    reloadButton.addEventListener('click', () => {
        const currentSrc = mainVideo.src; // Guarda la URL actual
        mainVideo.src = ''; // Limpia el iframe temporalmente
        mainVideo.src = currentSrc; // Recarga el iframe con la misma URL
    });
});

// Código para manejar la modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalSpan = document.getElementsByClassName('close')[0];

// Abre la modal cuando se hace clic en el botón
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Cierra la modal cuando se hace clic en el elemento <span> (x)
closeModalSpan.onclick = function() {
    modal.style.display = 'none';
}

// Cierra la modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Cierra la modal cuando se presiona la tecla Escape
document.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.style.display = 'none';
    }
}
