


// Get DOM elements
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginError = document.getElementById("login-error");

// Firebase Authentication
const auth = firebase.auth();

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent form submission

    const email = loginEmail.value;
    const password = loginPassword.value;

    // Firebase login with email and password
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            console.log("Logged in as:", user.email);
            // Redirect or show user data
            window.location.href = "home.html"; // Example redirect to the home page
        })
        .catch((error) => {
            // Handle error
            const errorCode = error.code;
            const errorMessage = error.message;
            loginError.textContent = `Error: ${errorMessage}`;
        });
});
