// Signup Function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!email || !password) {
    alert("Please enter email and password!");
    return;
  }

  // Check if the user already exists
  if (localStorage.getItem(email)) {
    alert("User already exists! Try logging in.");
    return;
  }

  // Store user credentials
  localStorage.setItem(email, password);
  alert("Signup successful! You can now log in.");
  window.location.href = "login.html"; // Redirect to login page
}

// Login Function
function login(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userType = document.getElementById("user-type").value;

  if (!email || !password) {
    alert("Please enter email and password!");
    return;
  }

  const storedPassword = localStorage.getItem(email);

  if (storedPassword && storedPassword === password) {
    alert(`Login successful as ${userType}!`);
    sessionStorage.setItem("user", email); // Store session data
    sessionStorage.setItem("userType", userType);
    window.location.href = "index.html"; // Redirect to homepage
  } else {
    alert("Invalid email or password!");
  }
}

// Logout Function
function logout() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("userType");
  alert("Logged out successfully!");
  window.location.href = "login.html"; // Redirect to login page
}
