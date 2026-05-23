// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
        const isDarkMode = document.body.classList.contains('darkmode');
        localStorage.setItem('darkMode', isDarkMode);
    });
}

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('darkmode');
}