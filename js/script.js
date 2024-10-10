document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const description = document.querySelector('.main-video .description');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');
    const searchBar = document.getElementById('search');

    // Crear lista de videos a partir de canales.js
    canales.forEach((canal) => {
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

    // ---- INTEGRACIÓN DE CHROMECAST ----

    // Espera a que la API de Cast esté disponible
    window['__onGCastApiAvailable'] = function(isAvailable) {
        if (isAvailable) {
            initializeCastApi();
        }
    };

    // Inicializa la API de Google Cast
    function initializeCastApi() {
        const castContext = cast.framework.CastContext.getInstance();
        castContext.setOptions({
            receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
        });
    }

    // Maneja el evento de hacer clic en el ícono de Chromecast
    document.getElementById('castButton').addEventListener('click', () => {
        const castSession = cast.framework.CastContext.getInstance().getCurrentSession();

        if (castSession) {
            loadMedia(castSession);
        } else {
            cast.framework.CastContext.getInstance().requestSession().then(() => {
                const session = cast.framework.CastContext.getInstance().getCurrentSession();
                loadMedia(session);
            });
        }
    });

    // Carga el video actual en Chromecast
    function loadMedia(session) {
        const videoUrl = mainVideo.src; // Obtiene la URL actual del iframe
        const mediaInfo = new chrome.cast.media.MediaInfo(videoUrl, 'video/mp4');
        const request = new chrome.cast.media.LoadRequest(mediaInfo);

        session.loadMedia(request).then(
            function() {
                console.log('Transmisión iniciada en Chromecast');
            },
            function(errorCode) {
                console.error('Error al iniciar la transmisión en Chromecast: ', errorCode);
            }
        );
    }
});
