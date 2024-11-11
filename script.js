document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        const name = contactForm.elements["name"].value;
        const email = contactForm.elements["email"].value;
        const message = contactForm.elements["message"].value;

        // Vérifie si les champs sont remplis (côté client)
        if (name && email && message) {
            // Affiche un message de confirmation
            formMessage.innerText = `Merci, ${name}! Votre message a bien été envoyé.`;
            formMessage.style.color = "green";
            contactForm.reset(); // Réinitialise le formulaire
        } else {
            formMessage.innerText = "Veuillez remplir tous les champs.";
            formMessage.style.color = "red";
        }
    });
});
