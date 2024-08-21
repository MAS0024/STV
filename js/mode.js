document.addEventListener('DOMContentLoaded', () => {
    const toggleDark = document.getElementById('toggleDark');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleDark.classList.remove('bi-brightness-high');
        toggleDark.classList.add('bi-moon');
    }

    toggleDark.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleDark.classList.remove('bi-brightness-high');
            toggleDark.classList.add('bi-moon');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleDark.classList.remove('bi-moon');
            toggleDark.classList.add('bi-brightness-high');
        }
    });
});
