document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const description = document.querySelector('.main-video .description');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');
    const searchBar = document.getElementById('search');
    
    let currentIndex = 0; // Índice del canal seleccionado actualmente

    // Crear lista de videos a partir de canales.js
    canales.forEach((canal, index) => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid');
        videoElement.dataset.sources = JSON.stringify(canal.sources);
        videoElement.dataset.title = canal.title;
        videoElement.dataset.description = canal.description; // Almacena la descripción en el dataset

        videoElement.innerHTML = `
            <img src="${canal.imgSrc}" alt="${canal.title}" />
            <h4 class="title">${canal.title}</h4>
        `;

        videoListContainer.appendChild(videoElement);
    });

    const listVideo = document.querySelectorAll('.video-list .vid');

    // Resaltar el primer canal inicialmente
    listVideo[currentIndex].classList.add('active');

    // Función para cambiar el canal resaltado
    function highlightChannel(index) {
        // Remueve la clase 'active' de todos los canales
        listVideo.forEach(video => video.classList.remove('active'));
        // Añade la clase 'active' al canal seleccionado
        listVideo[index].classList.add('active');
        // Asegúrate de que el canal esté visible en la lista
        listVideo[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Maneja la navegación por la lista de canales con el teclado
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowDown':
                // Moverse al siguiente canal
                if (currentIndex < listVideo.length - 1) {
                    currentIndex++;
                    highlightChannel(currentIndex);
                }
                break;
            case 'ArrowUp':
                // Moverse al canal anterior
                if (currentIndex > 0) {
                    currentIndex--;
                    highlightChannel(currentIndex);
                }
                break;
            case 'Enter':
                // Simular clic en el canal seleccionado
                listVideo[currentIndex].click();
                break;
            default:
                break;
        }
    });

    // Evento para cambiar de video al hacer clic en un canal
    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            const sources = JSON.parse(video.dataset.sources);

            updateSourceOptions(sources);
            changeIframeSource(sources[0]);
            autoSelectAvailableSource(sources);

            // Actualiza el título y la descripción en la sección principal
            title.textContent = video.dataset.title;
            //description.textContent = video.dataset.description;
        });
    });

    // Evento para cambiar la fuente de video
    changeSourceBtn.addEventListener('click', () => {
        const selectedSource = sourceSelect.value;
        changeIframeSource(selectedSource);
    });

    // Actualiza las opciones de servidores de transmisión
    function updateSourceOptions(sources) {
        sourceSelect.innerHTML = '';
        sources.forEach((source, index) => {
            if (source) {
                const option = document.createElement('option');
                option.value = source;

                // Verifica si la URL contiene "https://streamtp.live/global1.php?stream="
                if (source.includes("https://streamtp.live/global1.php?stream=")) {
                    option.textContent = `Opción ${index + 1} (Ads)`;
                } else if (source.includes("https://la10hd.com/vivo/canales.php?stream=")) {
                    option.textContent = `Opción ${index + 1} (Ads)`;
                } else {
                    option.textContent = `Opción ${index + 1}`;
                }

                sourceSelect.appendChild(option);
            }
        });
    }

    // Selecciona automáticamente la primera fuente válida
    function autoSelectAvailableSource(sources) {
        const firstValidSource = sources.find(source => source !== "");
        if (firstValidSource) {
            changeIframeSource(firstValidSource);
        }
    }

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

    // Funcionalidad de búsqueda en la lista de videos
    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.querySelector('.title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                video.style.display = '';
            } else {
                video.style.display = 'none';
            }
        });
    });
});
