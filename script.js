function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
}

// Initialize the form to show login by default
document.addEventListener('DOMContentLoaded', function() {
    showLogin();
});

document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmpassword = document.getElementById("confirmPassword").value;

    const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, confirmpassword }),
    });

    const data = await response.json();
    if (response.ok) {
        alert("Registration successful!");
        // Redirect to login or dashboard
    } else {
        alert("Registration failed: " + data.message);
    }
});