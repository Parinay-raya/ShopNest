// auth.js (Frontend JS for login and sign-up)

// Handle signup form submission
// document.getElementById('signupForm').addEventListener('submit', async function(e) {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     const response = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, email, password })
//     });
  
//     const data = await response.json();
//     alert(data.message || data.error);
//   });
  
  // Handle login form submission
  document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      window.location.href = 'index.html'; // Redirect after successful login
    } else {
      alert(data.message || data.error);
    }
  });
  