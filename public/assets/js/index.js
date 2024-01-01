const API_BASE_URL = "http://localhost:2002";

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("user-login");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

        window.location.href = "/public/assets/html/home.html";
      } else {
        console.error("Login failed:", data.message);

        if (
          data.errorCode === "USER_NOT_FOUND" ||
          data.errorCode === "INVALID_PASSWORD"
        ) {
          alert("Invalid email or password. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  });
});
