document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const container = document.querySelector('.container');
    const videoList = document.querySelector('.video-list');
    let currentIndex = 0;
    let channelSelected = false;
    let listVisible = false;

    // Crear lista de videos a partir de canales.js
    canales.forEach((canal, index) => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid');
        videoElement.dataset.sources = JSON.stringify(canal.sources);
        videoElement.dataset.title = canal.title;
        videoElement.dataset.description = canal.description;
        videoElement.tabIndex = 0;

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
    }

    loadInitialChannel();

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
        });
    });

    // Función para recargar el iframe
    const reloadButton = document.getElementById('reload-btn');
    reloadButton.addEventListener('click', () => {
        const currentSrc = mainVideo.src; // Guarda la URL actual
        mainVideo.src = ''; // Limpia el iframe temporalmente
        mainVideo.src = currentSrc; // Recarga el iframe con la misma URL
    });

    // Cambia la fuente del iframe de video
    function changeIframeSource(source) {
        const newIframe = document.createElement('iframe');
        newIframe.id = 'reproductor';
        newIframe.src = source;
        newIframe.allow = 'autoplay; encrypted-media';
        newIframe.allowFullscreen = true;

        mainVideo.parentNode.replaceChild(newIframe, mainVideo);
        mainVideo = newIframe;
    }
});
