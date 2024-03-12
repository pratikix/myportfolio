// menu icon navbar


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// sticky navbar 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// dark mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}


// Text Animations
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 800,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .headline ', { origin: 'top'});
ScrollReveal().reveal('.services-container, .portfolio-box, .skill-container ', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', { origin: 'left'});
ScrollReveal().reveal('.home-content h3' , '.home-content p','.about-content', { origin: 'right'});



// read more button 
const btn = document.querySelector('#read-more');
const hiddenText = document.querySelector('.hidden-text');

btn.addEventListener('click', function() {
  if (hiddenText.style.maxHeight === '0px') {
    hiddenText.style.maxHeight = '100%';
    btn.innerText = 'Read Less';
  } else {
    hiddenText.style.maxHeight = '0px';
    btn.innerText = 'Read More';
  }
});
