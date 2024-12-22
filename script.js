document.addEventListener("DOMContentLoaded", () => {
    const dateSpan = document.getElementById("date");
    const daysCounterSpan = document.getElementById("days-counter");
    const iontr = document.querySelector(".msgs");

    const celebrateButton = document.getElementById("celebrate-button");
    const introText = document.querySelector(".intro-text");
    const surpriseDiv = document.querySelector(".surprise");

    // Calculer la date actuelle
    const today = new Date();
    dateSpan.textContent = `${today.getDate()} décembre`;
    const startDate = new Date("2024-08-25");
    const differenceInMilliseconds = today - startDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    daysCounterSpan.textContent = differenceInDays;
    // Ajouter des confettis
    const generateConfetti = () => {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = Math.random() * -50 + "vh";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
            confetti.style.animationDelay = Math.random() * 2 + "s";
            confettiContainer.appendChild(confetti);

            // Retirer les confettis après l'animation

        }
    };

    // Action sur le clic du bouton
     celebrateButton.addEventListener("click", () => {
        introText.style.opacity = "0";
        setTimeout(() => {
            introText.style.display = "none";
            iontr.style.display= "none" // Masquer complètement le texte initial
            surpriseDiv.classList.add("visible");
        }, 400); // Attend que l'effet de transition soit terminé
    });
});