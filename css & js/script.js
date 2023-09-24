document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const textElement = document.getElementById("animated-text");
        textElement.style.animation = "popUp 0.5s ease-out forwards";
        textElement.style.visibility = "visible";

        setTimeout(function() {
            // Fügen Sie eine Klasse hinzu, um den linken Verschiebungseffekt zu aktivieren
            textElement.style.animation = "slideLeft 0.8s ease-out forwards";

            setTimeout(function() {
                // Hier wird die Umleitung durchgeführt, z.B. zu einer anderen Seite
                window.location.href = "src/"; // Ändern Sie die URL entsprechend
            }, 700); // Verzögerung, um den linken Verschiebungseffekt zu zeigen
        }, 4000); // Text wird 3 Sekunden lang angezeigt, bevor er verschoben wird
    }, 2000); // Text wird nach 2 Sekunden angezeigt
});
