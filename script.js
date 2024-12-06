document.addEventListener("DOMContentLoaded", () => {
    const dateSpan = document.getElementById("date");
    const ateSpan = document.getElementById("dates");
    const surpriseButton = document.getElementById("surprise-button");
    const surpriseDiv = document.querySelector(".surprise");
    const starsContainer = document.querySelector(".stars");

    // Obtenir la date actuelle
    const today = new Date();
    dateSpan.textContent = `${today.getDate()} décembre`;

    // Calculer le nombre de jours écoulés depuis le 5 août 2024
    const startDate = new Date("2024-08-05");
    const differenceInMilliseconds = today - startDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    ateSpan.textContent = `${differenceInDays} jours`;

    // Éviter la duplication des étoiles
    let starsGenerated = false;

    // Afficher la surprise
    surpriseButton.addEventListener("click", () => {
        surpriseDiv.classList.remove("hidden");
        surpriseButton.parentElement.style.display = "none";

        if (!starsGenerated) {
            // Générer 100 étoiles aléatoires
            for (let i = 0; i < 250; i++) {
                const star = document.createElement("div");
                star.className = "star";

                // Position et animation aléatoires
                star.style.left = Math.random() * 100 + "vw";
                star.style.top = Math.random() * -50 + "vh";
                star.style.width = Math.random() * 5 + 2 + "px";
                star.style.height = star.style.width;
                star.style.animationDuration = Math.random() * 3 + 2 + "s";
                star.style.animationDelay = Math.random() * 2 + "s";

                starsContainer.appendChild(star);
            }
            starsGenerated = true; // Marquer les étoiles comme générées
        }
    });
});
