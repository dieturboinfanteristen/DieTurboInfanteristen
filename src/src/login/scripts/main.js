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
      { username: "Max", password: "Max" },
      { username: "Leon", password: "Leon" },
      { username: "Jendrigo", password: "Jendrigo" }
    ];

    // Überprüfen Sie, ob die eingegebenen Benutzerdaten in der Liste vorhanden sind
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      // Benutzer erfolgreich eingeloggt, speichern Sie den Benutzernamen im Local Storage
      localStorage.setItem("loggedInUsername", username);

      // Weiterleiten zur eingeloggt.html-Seite
      window.location.href = "wil/eingeloggt.html";
    } else {
      alert("Falscher Benutzername oder falsches Passwort");
    }
  });
});

$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
