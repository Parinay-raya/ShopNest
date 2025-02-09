// Get DOM elements
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form submission

    const email = loginEmail.value;
    const password = loginPassword.value;

    try {
        const response = await fetch("https://shopnest-a6op.onrender.com/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Logged in as:", data.user.email);
            localStorage.setItem("token", data.token); // Store token for future requests
            window.location.href = "home.html"; // Redirect after login
        } else {
            throw new Error(data.error || "Login failed");
        }
    } catch (error) {
        loginError.textContent = `Error: ${error.message}`;
    }
});
