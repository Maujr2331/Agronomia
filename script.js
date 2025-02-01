document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    // Função para mover para o próximo item
    function moveToNext() {
        currentIndex = (currentIndex + 1) % totalItems; // Volta para o início após a última imagem
        const offset = -currentIndex * 100; // Desloca as imagens
        carousel.style.transform = `translateX(${offset}%)`; // Move o carrossel
    }

    setInterval(moveToNext, 3000); // A cada 3 segundos, move para a próxima imagem
});
