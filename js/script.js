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

document.addEventListener('DOMContentLoaded', function () {
    const mainPlayer = document.getElementById('mainPlayer');
    const videoList = document.querySelectorAll('.vid');
    const titleElement = document.querySelector('.main-video .title');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');

    let currentSources = [];

    videoList.forEach(video => {
        video.addEventListener('click', () => {
            currentSources = JSON.parse(video.getAttribute('data-sources'));
            mainPlayer.src = currentSources[0];
            titleElement.textContent = video.getAttribute('data-title');

            // Clear and populate the source select dropdown
            sourceSelect.innerHTML = '';
            currentSources.forEach((source, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `Fuente ${index + 1}`;
                sourceSelect.appendChild(option);
            });
        });
    });

    changeSourceBtn.addEventListener('click', () => {
        const selectedSourceIndex = sourceSelect.value;
        mainPlayer.src = currentSources[selectedSourceIndex];
    });
});