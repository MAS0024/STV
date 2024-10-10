document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const container = document.querySelector('.container'); // Contenedor principal
    const videoList = document.querySelector('.video-list'); // Lista de canales
    let currentIndex = 0; // Índice del canal seleccionado actualmente
    let channelSelected = false; // Estado para saber si ya se seleccionó un canal
    let listVisible = false; // Estado para controlar si la lista está visible

    // Crear lista de videos a partir de canales.js
    canales.forEach((canal, index) => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid');
        videoElement.dataset.sources = JSON.stringify(canal.sources);
        videoElement.dataset.title = canal.title;
        videoElement.dataset.description = canal.description;
        videoElement.tabIndex = 0; // Permite que los elementos reciban foco en TV

        videoElement.innerHTML = `
            <img src="${canal.imgSrc}" alt="${canal.title}" />
            <h4 class="title">${canal.title}</h4>
        `;

        videoListContainer.appendChild(videoElement);
    });

    const listVideo = document.querySelectorAll('.video-list .vid');

    // Función para cargar un canal inicial al cargar la página
    function loadInitialChannel() {
        const initialChannel = canales[0].sources[0]; // Carga el primer canal de la lista
        changeIframeSource(initialChannel);
        title.textContent = canales[0].title;
    }

    // Cargar el canal inicial al inicio
    loadInitialChannel();

    // Función para cambiar el canal resaltado
    function highlightChannel(index) {
        // Remueve la clase 'active' de todos los canales
        listVideo.forEach(video => video.classList.remove('active'));
        // Añade la clase 'active' al canal seleccionado
        listVideo[index].classList.add('active');
        // Asegúrate de que el canal esté visible en la lista
        listVideo[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Mostrar la lista de canales
    function showChannelList() {
        container.classList.add('show-list');
        videoList.style.transform = 'translateX(0)';
        channelSelected = false; // Aún no se seleccionó un canal
        listVisible = true; // Estado para indicar que la lista está visible
    }

    // Ocultar la lista de canales
    function hideChannelList() {
        container.classList.remove('show-list');
        videoList.style.transform = 'translateX(100%)';
        listVisible = false; // Estado para indicar que la lista ya no está visible
    }

    // Forzar que siempre se oculte la lista cuando se presiona izquierda y esté visible
    function forceHideChannelList() {
        if (listVisible) {
            hideChannelList();
        }
    }

    // Maneja la navegación por la lista de canales con el teclado
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowRight':
                // Mostrar la lista de canales al presionar la flecha derecha
                showChannelList();
                break;
            case 'ArrowLeft':
                // Forzar ocultar la lista de canales al presionar la flecha izquierda
                forceHideChannelList();
                break;
            case 'ArrowDown':
                // Moverse al siguiente canal si la lista de canales está visible
                if (listVisible && currentIndex < listVideo.length - 1) {
                    currentIndex++;
                    highlightChannel(currentIndex);
                }
                break;
            case 'ArrowUp':
                // Moverse al canal anterior si la lista de canales está visible
                if (listVisible && currentIndex > 0) {
                    currentIndex--;
                    highlightChannel(currentIndex);
                }
                break;
            case 'Enter':
                // Reproducir el canal seleccionado al presionar "Enter"
                if (listVisible) {
                    listVideo[currentIndex].click(); // Simular clic en el canal seleccionado
                    channelSelected = true; // Se ha seleccionado un canal
                    forceHideChannelList(); // Ocultar la lista después de seleccionar un canal
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
            changeIframeSource(sources[0]); // Cargar el primer servidor
            title.textContent = video.dataset.title;
            currentIndex = index; // Actualizar el índice actual al seleccionar el canal
        });
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
