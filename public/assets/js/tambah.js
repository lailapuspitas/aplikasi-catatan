const API_BASE_URL = "http://localhost:2002";

document.addEventListener("DOMContentLoaded", function () {
  const tambahForm = document.getElementById("tambah-buku");

  tambahForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Mendapatkan nilai dari input form
    const sampul = document.getElementById("sampul-buku").files[0];
    const judul = document.getElementById("judul-buku").value;
    const totalHalaman = document.getElementById("total-hlm").value;
    const progres = document.getElementById("progres").value;

    // Menggunakan FormData untuk mengirim data file dan teks
    const formData = new FormData();
    formData.append("sampul", sampul);
    formData.append("judul", judul);
    formData.append("total", totalHalaman);
    formData.append("progres", progres);

    // Mengirim permintaan POST menggunakan fetch
    const response = await fetch(`${API_BASE_URL}/catatan`, {
      method: "POST",
      body: formData,
    });

    // Memeriksa status respon
    if (!response.ok) {
      throw new Error("Failed to add new catatan buku");
    }

    // Mengambil data dari respon
    const data = await response.json();

    // Menjalankan fungsi showAlertAndRedirect() secara asynchronous
    // setelah permintaan POST selesai
    setTimeout(() => {
      showAlertAndRedirect(
        "Data berhasil ditambahkan",
        "/public/assets/html/home.html"
      );
    }, 0);
  });
});

// Show alert message and redirect to index.html
function showAlertAndRedirect(message, redirectUrl) {
  window.alert(message);
  window.location.href = redirectUrl;
}
