// login.js

// Define valid credentials for testing
const validUsername = "user";
const validPassword = "password";

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get the entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username === validUsername && password === validPassword) {
        // Store login status in sessionStorage
        sessionStorage.setItem("loggedIn", "true");

        // Redirect to the dashboard page
        window.location.href = "public/dash2.html";
    } else {
        // Show an error message if credentials are incorrect
        alert("Invalid username or password. Please try again.");
    }
});
