
    document.addEventListener("DOMContentLoaded", function(event) {
        const headerToggle = document.getElementById('header-toggle');
        const navBar = document.getElementById('nav-bar');
        const bodyPd = document.getElementById('body-pd');
        const headerPd = document.getElementById('header');
    
        headerToggle.addEventListener('click', () => {
            // Toggle the class to show/hide the sidebar
            navBar.classList.toggle('show');
            // Add padding to body and header when the sidebar is shown
            bodyPd.classList.toggle('body-pd');
            headerPd.classList.toggle('body-pd');
            // Move the menu icon when the sidebar is shown
            headerToggle.classList.toggle('active');
        });
    });
    
    