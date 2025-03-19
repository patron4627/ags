document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    // Beim Klicken auf das Hamburger-Menü wird die Navigation ein- oder ausgeblendet
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show'); // Menü anzeigen oder ausblenden
    });
});
