$(document).ready(function () {
    // Select the hamburger icon and the nav items container
    const $hamburgerIcon = $('.fa-bars');
    const $navItems = $('.nav');

    // Add a click event listener to the hamburger icon
    $hamburgerIcon.on('click', function () {
        // Toggle the 'open' class on the nav items container to show/hide it
        $navItems.toggleClass('open');
    });
});

$(document).ready(function() {
    // Selektieren Sie das X-Symbol (fa-times)
    var closeIcon = $('.fa-times');

    // Selektieren Sie die Navigationsleiste (nav)
    var nav = $('.nav');

    // Fügen Sie einen Klick-Event-Listener zum X-Symbol hinzu
    closeIcon.click(function() {
        // Schließen Sie die Navigation, indem Sie die Klasse .open entfernen
        nav.removeClass('open');
    });
});