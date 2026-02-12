let lastScrollTop = 0;
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScroll && currentScroll > 80) {
     
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
    } else {
       
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }

    if (currentScroll > 20) {
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});