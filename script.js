// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
} else {
    toggleButton.textContent = '🌙';
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '🌙';
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '☀️';
    }
});

// Profile Selection - Navigate to Catalog
const profiles = document.querySelectorAll('.profile');

profiles.forEach(profile => {
    profile.addEventListener('click', () => {
        const figure = profile.querySelector('figure');
        const img = figure.querySelector('img');
        const figcaption = figure.querySelector('figcaption');
        
        // Save profile data to localStorage
        localStorage.setItem('perfilAtivoNome', figcaption.textContent);
        localStorage.setItem('perfilAtivoImagem', img.src);
        
        // Navigate to catalog
        window.location.href = './catalogo/catalogo.html';
    });

    // Support keyboard navigation (Enter key)
    profile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            profile.click();
        }
    });
});