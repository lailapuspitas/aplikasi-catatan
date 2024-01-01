const API_BASE_URL = "http://localhost:2002";

document
  .getElementById("update-buku")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    fillUpdateForm();
  });
async function fillUpdateForm() {
  try {
    // Get book ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bukuId = urlParams.get("id");

    // Validate input data
    const judulInput = document.getElementById("judul-buku").value.trim();
    if (judulInput === "") {
      alert("Judul buku tidak boleh kosong");
      return;
    }

    // Get other form values
    const sampulInput = document.getElementById("sampul-buku").value;
    const totalHlmInput = document.getElementById("total-hlm").value;
    const progresInput = document.getElementById("progres").value;

    // Send PUT request to API
    const response = await fetch(`${API_BASE_URL}/catatan/${bukuId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sampul: sampulInput,
        judul: judulInput,
        total_hlm: totalHlmInput,
        progres: progresInput,
      }),
    });

    // Check response status
    if (!response.ok) {
      alert("Gagal mengupdate data buku");
      return;
    }

    // Redirect to home page
    window.location.href = "/public/assets/html/home.html";
  } catch (error) {
    console.error("Error filling update form:", error);
    // Handle the error as needed
  }
}

async function getBukuDataFromDB(bukuId) {
  const API_BASE_URL = "http://localhost:2002";
  try {
    const response = await fetch(`${API_BASE_URL}/catatan/${bukuId}`);
    const data = await response.json();
    console.log("Response from server:", data); // Log the response for debugging

    return data.data;
  } catch (error) {
    console.error("Error fetching Buku data:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}
