document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    function updateActiveSection() {
        const hash = window.location.hash || '#home';
        
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active-link'));

        const activeSection = document.querySelector(hash);
        const activeLink = document.querySelector(`nav a[href="${hash}"]`);

        if (activeSection) {
            activeSection.classList.add('active');
        }
        if (activeLink) {
            activeLink.classList.add('active-link');
        }
    }

    window.addEventListener('hashchange', updateActiveSection);

    updateActiveSection();
});