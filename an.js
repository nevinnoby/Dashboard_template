document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
   
    nav.classList.toggle('show')
    
    toggle.classList.toggle('bx-x')
   
    bodypd.classList.toggle('body-pd')
  
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
  
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     
    });

function toggleDarkMode() {
    
    document.body.classList.toggle('dark-mode');
    

    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-mode-navbar');


    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const navbar = document.querySelector('.bg-body-tertiary'); // Update the selector here
        navbar.classList.add('dark-mode-navbar');
    }
});



document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// // Toggle card visibility when clicking the button
// expandCardButton.addEventListener('click', function() {
//     expandCard.style.display = expandCard.style.display === 'none' ? 'block' : 'none';
// });
