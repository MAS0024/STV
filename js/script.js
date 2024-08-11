/*document.addEventListener('DOMContentLoaded', () => {
    const listVideo = document.querySelectorAll('.video-list .vid');
    const mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const searchBar = document.getElementById('search');

    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            if (video.classList.contains('active')) {
                const src = video.dataset.src;
                mainVideo.src = src;
                title.textContent = video.querySelector('.title').textContent;
            }
        });
    });

    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            video.style.display = title.includes(filter) ? '' : 'none';
        });
    });
});
*/


    document.addEventListener('DOMContentLoaded', () => {

        const listVideo = document.querySelectorAll('.video-list .vid');
        const mainVideo = document.querySelector('.main-video iframe');
        const title = document.querySelector('.main-video .title');
        const searchBar = document.getElementById('search');
        const sourceSelect = document.getElementById('sourceSelect');
        const changeSourceBtn = document.getElementById('changeSourceBtn');

        // Bloqueo de ventanas emergentes
        listVideo.forEach(video => {
            video.addEventListener('click', (event) => {
                // Interceptar el evento click para prevenir que abra una ventana emergente
                event.preventDefault();
                event.stopPropagation();

                listVideo.forEach(vid => vid.classList.remove('active'));
                video.classList.add('active');

                if (video.classList.contains('active')) {
                    const src = video.dataset.src;
                    mainVideo.src = src;
                    title.textContent = video.querySelector('.title').textContent;
                }

                const sources = JSON.parse(video.dataset.sources);
                mainVideo.src = sources[0];
                title.textContent = video.querySelector('.title').textContent;
                updateSourceOptions(sources);
            });
        });

        searchBar.addEventListener('input', () => {
            const filter = searchBar.value.toLowerCase();
            listVideo.forEach(video => {
                const title = video.getAttribute('data-title').toLowerCase();
                video.style.display = title.includes(filter) ? '' : 'none';
            });
        });

        changeSourceBtn.addEventListener('click', () => {
            const selectedSource = sourceSelect.value;
            mainVideo.src = selectedSource;
        });

        function updateSourceOptions(sources) {
            sourceSelect.innerHTML = '';
            sources.forEach((source, index) => {
                const option = document.createElement('option');
                option.value = source;
                option.textContent = `Fuente ${index + 1}`;
                sourceSelect.appendChild(option);
            });
        }

        // Previene la apertura de ventanas emergentes desde cualquier clic
        document.body.addEventListener('click', (event) => {
            if (event.target.tagName === 'IFRAME') {
                event.preventDefault();
                event.stopPropagation();
                mainVideo.contentWindow.postMessage('play', '*'); // Intentar iniciar la reproducción de manera controlada
            }
        }, true);
    });

