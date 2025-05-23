document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o Swiper para o carrossel
    const swiper = new Swiper('.mySwiper', {
        effect: 'fade',  // efeito de transição fade
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    // Tentar iniciar a reprodução automática do Spotify
    const spotifyIframe = document.querySelector('.spotify-container iframe');
    
    // Função para tentar reproduzir o áudio após interação do usuário
    function tentarReproducaoAutomatica() {
        // Recarregar o iframe para forçar a reprodução
        spotifyIframe.src = spotifyIframe.src;
        // Remover os event listeners após a primeira interação
        document.removeEventListener('click', tentarReproducaoAutomatica);
        document.removeEventListener('touchstart', tentarReproducaoAutomatica);
    }
    
    // Adicionar event listeners para interação do usuário
    document.addEventListener('click', tentarReproducaoAutomatica);
    document.addEventListener('touchstart', tentarReproducaoAutomatica);

    // Data de início do relacionamento: 2 de março de 2018 às 10h
    const startDate = new Date('2018-03-02T10:00:00');

    // Função para atualizar o contador
    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        // Cálculo de tempo
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Atualizar os elementos HTML
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    // Atualizar o contador imediatamente e depois a cada segundo
    updateCounter();
    setInterval(updateCounter, 1000);

    // Adicionar efeito de zoom nas imagens ao passar o mouse/tocar
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        slide.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
        slide.addEventListener('touchstart', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        slide.addEventListener('touchend', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
});