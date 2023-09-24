document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".login-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seitenaktualisierung)

    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Definieren Sie eine Liste von Benutzerdaten
    const users = [
      { username: "owner", password: "owner" },
      { username: "jendrigo", password: "jendrigo" },
      { username: "leon", password: "leon" }
      // Fügen Sie weitere Benutzer hinzu, falls erforderlich
    ];

    // Überprüfen Sie, ob die eingegebenen Benutzerdaten in der Liste vorhanden sind
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      window.location.href = "#eingeloggt"; // Hier die Weiterleitungs-URL angeben
    } else {
      alert("Falscher Benutzername oder falsches Passwort");
    }
  });
});


$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });