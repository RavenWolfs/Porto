document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    
    // ubah background header saat scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(22, 36, 71, 0.95)';
        } else {
            header.style.background = 'rgba(22, 36, 71, 0.8)';
        }
    });


});

