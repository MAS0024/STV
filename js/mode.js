document.getElementById('themeToggleBtn').addEventListener('click', function() {
    let body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Cambiar texto del botón según el tema
    if(body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Oscuro';
    }
});