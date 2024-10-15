document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const container = document.querySelector('.container');
    const videoList = document.querySelector('.video-list');
    const serverSelect = document.getElementById('server-select'); // Selector de servidor
    let currentIndex = 0;
    let channelSelected = false;
    let listVisible = false;
    let currentSources = []; // Fuentes actuales del canal

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

    const listVideo = document.querySelectorAll('.video-list .vid');

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

            // Verifica si la URL contiene 'streamtp.live' para agregar "(ads)"
            if (source.includes('streamtp.live')) {
                option.textContent = `Op ${index + 1}.ads`;
            }
            else if(source.includes('la10hd.com')) {
                option.textContent = `Op ${index + 1}.ads`;
            }

        else if(source.includes('nebunexa.co')) {
            option.textContent = `Op ${index + 1}.ads`;
        }
        else if(source.includes('star.nebunexa.com')) {
            option.textContent = `Op ${index + 1}.ext`;
        }
            else {
                option.textContent = `Op ${index + 1}`;
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

    // Mostrar la lista de canales
    function showChannelList() {
        container.classList.add('show-list');
        videoList.style.transform = 'translateX(0)';
        channelSelected = false;
        listVisible = true;
    }

    // Ocultar la lista de canales
    function hideChannelList() {
        container.classList.remove('show-list');
        videoList.style.transform = 'translateX(100%)';
        listVisible = false;
    }

    function forceHideChannelList() {
        if (listVisible) {
            hideChannelList();
        }
    }

    // Nueva función para el botón que alterna la visibilidad de la lista
    const toggleButton = document.getElementById('toggle-list-btn');
    toggleButton.addEventListener('click', () => {
        if (listVisible) {
            hideChannelList();
        } else {
            showChannelList();
        }
    });

    // Maneja la navegación por la lista de canales con el teclado
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowRight':
                showChannelList();
                break;
            case 'ArrowLeft':
                forceHideChannelList();
                break;
            case 'Escape':
                forceHideChannelList();
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
                    forceHideChannelList();
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

    // Ocultar la lista de canales al hacer clic fuera de la misma
    document.addEventListener('click', (event) => {
        if (!videoList.contains(event.target) && !toggleButton.contains(event.target)) {
            forceHideChannelList();
        }
    });

    // Función para recargar el iframe
    const reloadButton = document.getElementById('reload-btn');
    reloadButton.addEventListener('click', () => {
        const currentSrc = mainVideo.src; // Guarda la URL actual
        mainVideo.src = ''; // Limpia el iframe temporalmente
        mainVideo.src = currentSrc; // Recarga el iframe con la misma URL
    });
});


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
