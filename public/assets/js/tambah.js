const API_BASE_URL = "http://localhost:2002";

document.addEventListener("DOMContentLoaded", function () {
  const tambahForm = document.getElementById("tambah-buku");

  tambahForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const sampul = document.getElementById("sampul-buku").files[0];
    const judul = document.getElementById("judul-buku").value;
    const totalHalaman = document.getElementById("total-hlm").value;
    const progres = document.getElementById("progres").value;

    const formData = new FormData();
    formData.append("sampul", sampul);
    formData.append("judul", judul);
    formData.append("total", totalHalaman);
    formData.append("progres", progres);

    const response = await fetch(`${API_BASE_URL}/catatan`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to add new catatan buku");
    }

    const data = await response.json();

    setTimeout(() => {
      showAlertAndRedirect(
        "Data berhasil ditambahkan",
        "/public/assets/html/home.html"
      );
    }, 0);
  });
});

function showAlertAndRedirect(message, redirectUrl) {
  window.alert(message);
  window.location.href = redirectUrl;
}
