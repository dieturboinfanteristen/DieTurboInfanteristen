function loginUser() {
    // Get the username and password input values
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Check user credentials
    if (usernameInput === 'owner' && passwordInput === 'owner') {
        // Call the function to display the success message
        displaySuccessMessage();
        // Redirect to a success page after 2 seconds
        setTimeout(function () {
            window.location.href = '404/';
        }, 2000); // 2000 milliseconds (2 seconds)
    } else {
        // Show the error message
        var passwordError = document.getElementById('password-error');
        passwordError.style.display = 'block';

        // Hide the error message after 2 second
        setTimeout(function () {
            passwordError.style.display = 'none';
        }, 2000); // 2000 milliseconds (2 second)
    }
}

// Function to toggle password visibility (unchanged)
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var showIcon = document.querySelector('.show-icon');
    var hideIcon = document.querySelector('.hide-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        hideIcon.style.display = 'none';
        showIcon.style.display = 'initial';
    } else {
        passwordInput.type = 'password';
        showIcon.style.display = 'none';
        hideIcon.style.display = 'initial';
    }
}

// Function to display the success message
function displaySuccessMessage() {
    var successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
}