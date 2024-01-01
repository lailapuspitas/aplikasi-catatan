const API_BASE_URL = "http://localhost:2002";

document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("user-regist");
  userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addNewUser();
  });
});

async function addNewUser() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const hashedPassword = document.getElementById("hashedPassword").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if passwords match
  if (hashedPassword !== confirmPassword) {
    window.alert("Password and confirm password do not match.");
    return;
  }

  const userData = {
    nama,
    email,
    hashedPassword,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.status === 201) {
      const responseData = await response.json();

      // Clear the form fields
      clearForm();

      // Show success alert and redirect to index.html
      showAlertAndRedirect("User successfully created!", "/public/index.html");
    } else {
      console.error("Failed to create user. Status code:", response.status);
      displayErrorMessage("Email sudah terdaftar, silakan gunakan email lain");
    }
  } catch (error) {
    console.error("Error sending data: " + error);
    displayErrorMessage(error.message);
  }
}
// Function to display error message in the <p> element
function displayErrorMessage(message) {
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = message;
}
// Clear the form fields
function clearForm() {
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
  document.getElementById("hashedPassword").value = "";
  document.getElementById("confirm-password").value = "";
}

// Show alert message and redirect to index.html
function showAlertAndRedirect(message, redirectUrl) {
  window.alert(message);
  window.location.href = redirectUrl;
}
