const countdown = document.getElementById('time');
        const targetDate = new Date('2025-01-01T00:00:00').getTime();

        setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdown.textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);

        // Gestion des souvenirs et du deuxième message
        document.getElementById('show-memories').addEventListener('click', () => {
            document.getElementById('message-box').style.display = 'none';
            document.getElementById('memories').style.display = 'block';
            document.getElementById('love-box').style.display = 'block';
            togglethem();
        });

     const container = document.querySelector('.container');
     function togglethem() {
              const fireworks = new Fireworks.default(container, {
            autoresize: true,
            opacity: 0.9,
            acceleration: 1.05,
            friction: 0.98,
            gravity: 1.5,
            particles: 50,
            traceLength: 3,
            explosion: 5,
        });

  fireworks.start();
          setTimeout(() => {
            fireworks.stop();
            document.body.removeChild(container);
        }, 10000);
    };
     
function showText(image) {
    const parent = image.parentElement; // Récupère le conteneur parent
    const text = parent.querySelector('.memory-text'); // Récupère le texte
    text.style.display = text.style.display === 'block' ? 'none' : 'block'; // Affiche/Cache le texte
}