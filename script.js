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
            triggerFireworks();
        });

        // Feux d'artifice
        function triggerFireworks() {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/fireworks-js/dist/index.min.js';

            script.onload = () => {
                const container = document.createElement('div');
                container.style.position = 'fixed';
                container.style.top = '0';
                container.style.left = '0';
                container.style.width = '100%';
                container.style.height = '100%';
                container.style.zIndex = '9999';
                document.body.appendChild(container);

                const fireworks = new Fireworks(container, {
                    rocketsPoint: 50,
                    speed: 4,
                    acceleration: 1.05,
                    friction: 0.98,
                    gravity: 1.5,
                });
                fireworks.start();

                setTimeout(() => {
                    fireworks.stop();
                    document.body.removeChild(container);
                }, 5000);
            };
            document.body.appendChild(script);
        }