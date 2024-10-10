document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');
    const searchBar = document.getElementById('search');
    const castButton = document.getElementById('castButton');
    let currentSource = ''; // Guardamos la URL actual del video

    // Inicializamos la API de Google Cast
    function initializeCastApi() {
        cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
        });
    }

    // Listener para detectar si el framework de Cast está disponible
    window['__onGCastApiAvailable'] = function(isAvailable) {
        if (isAvailable) {
            initializeCastApi();
        }
    };

    // Listener del botón de transmisión
    castButton.addEventListener('click', () => {
        const castSession = cast.framework.CastContext.getInstance().getCurrentSession();
        if (castSession) {
            const mediaInfo = new chrome.cast.media.MediaInfo(currentSource, 'video/mp4');
            const request = new chrome.cast.media.LoadRequest(mediaInfo);

            castSession.loadMedia(request).then(
                () => {
                    console.log('Media loaded successfully on Chromecast.');
                },
                (errorCode) => {
                    console.log('Error loading media on Chromecast:', errorCode);
                }
            );
        } else {
            console.log('No cast session available.');
        }
    });

    // Función que actualiza el iframe y prepara la URL para Chromecast
    function changeIframeSource(source) {
        currentSource = source;  // Guardamos la URL actual
        const newIframe = document.createElement('iframe');
        newIframe.id = 'reproductor';
        newIframe.src = source;
        newIframe.allow = 'autoplay; encrypted-media';
        newIframe.allowFullscreen = true;

        mainVideo.parentNode.replaceChild(newIframe, mainVideo);
        mainVideo = newIframe;
    }

    // Resto del código de inicialización del sitio
    canales.forEach((canal) => {
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

    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            const sources = JSON.parse(video.dataset.sources);

            updateSourceOptions(sources);
            changeIframeSource(sources[0]);
            autoSelectAvailableSource(sources);
            title.textContent = video.dataset.title;
        });
    });

    changeSourceBtn.addEventListener('click', () => {
        const selectedSource = sourceSelect.value;
        changeIframeSource(selectedSource);
    });

    function updateSourceOptions(sources) {
        sourceSelect.innerHTML = '';
        sources.forEach((source, index) => {
            if (source) {
                const option = document.createElement('option');
                option.value = source;
    
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

    function autoSelectAvailableSource(sources) {
        const firstValidSource = sources.find(source => source !== "");
        if (firstValidSource) {
            changeIframeSource(firstValidSource);
        }
    }

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
