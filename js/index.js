document.querySelectorAll('.changeSlide').forEach(link => {  
    link.addEventListener('click', function (e) {  
        e.preventDefault();  
        const slideIndex = parseInt(this.getAttribute('data-slide'));  
        swiper.slideTo(slideIndex); 
    });  
});  



// ScrollReveal({
//     reset: true,
//     distance: '60px',
//     duration: 2500,
//     delay: 250,
// });

// ScrollReveal().reveal('.element1', { origin: 'left' });
// ScrollReveal().reveal('.element2', { origin: 'right' });
