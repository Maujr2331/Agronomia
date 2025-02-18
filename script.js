document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    function moveToNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`; 
    }

    setInterval(moveToNext, 3000);
});
