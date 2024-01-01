const API_BASE_URL = "http://localhost:2002";

document
  .getElementById("update-buku")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    fillUpdateForm();
  });
async function fillUpdateForm() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const bukuId = urlParams.get("id");

    const judulInput = document.getElementById("judul-buku").value.trim();
    if (judulInput === "") {
      alert("Judul buku tidak boleh kosong");
      return;
    }

    const sampulInput = document.getElementById("sampul-buku").value;
    const totalHlmInput = document.getElementById("total-hlm").value;
    const progresInput = document.getElementById("progres").value;

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

    if (!response.ok) {
      alert("Gagal mengupdate data buku");
      return;
    }

    window.location.href = "/public/assets/html/home.html";
  } catch (error) {
    console.error("Error filling update form:", error);
  }
}

async function getBukuDataFromDB(bukuId) {
  const API_BASE_URL = "http://localhost:2002";
  try {
    const response = await fetch(`${API_BASE_URL}/catatan/${bukuId}`);
    const data = await response.json();
    console.log("Response from server:", data);

    return data.data;
  } catch (error) {
    console.error("Error fetching Buku data:", error);
    throw error;
  }
}
