document.addEventListener("DOMContentLoaded", function() {
    const username = getLoggedInUsername(); // Funktion, um den eingeloggten Benutzernamen zu erhalten
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (username) {
        welcomeMessage.textContent = `Willkommen, ${username} du bist erfolgreich Angemeldet!`;
    } else {
        welcomeMessage.textContent = "Willkommen!";
    }

    setTimeout(function() {
        welcomeMessage.style.display = "none";
    }, 5000);
});

function getLoggedInUsername() {
    const username = localStorage.getItem("loggedInUsername");

    return username;
}