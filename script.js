const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayErrorMessage(emailInput, "Please enter a valid email address.");
    return;
  }

  // Validate password strength
  const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    displayErrorMessage(passwordInput, "Password must contain at least 8 characters, an uppercase letter, a number, and one of these special characters: @$!%*?&");
    return;
  }

  // Handle successful validation (e.g., send login request to server)
  console.log("Valid email and password!");
  // ...
});

function displayErrorMessage(inputField, message) {
  const errorMessage = inputField.nextElementSibling;
  errorMessage.textContent = message;
}