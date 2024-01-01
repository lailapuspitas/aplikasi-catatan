async function getCatatanDataFromDB() {
  const API_BASE_URL = "http://localhost:2002";
  const response = await fetch(`${API_BASE_URL}/catatan`);
  const data = (await response.json()).data;

  return data;
}

function createCatatanTableRow(buku, index) {
  const tr = document.createElement("tr");

  const tdNumber = document.createElement("td");
  tdNumber.textContent = index + 1;
  tr.appendChild(tdNumber);

  const tdSampul = document.createElement("td");
  const sampulImg = document.createElement("img");
  sampulImg.src = `/all-backend/image-upload/${buku.sampul}`;
  sampulImg.alt = buku.judul;
  tdSampul.appendChild(sampulImg);
  tr.appendChild(tdSampul);

  const tdJudul = document.createElement("td");
  tdJudul.textContent = buku.judul;
  tr.appendChild(tdJudul);

  const tdTotalPages = document.createElement("td");
  tdTotalPages.textContent = buku.total;
  tr.appendChild(tdTotalPages);

  const tdProgress = document.createElement("td");
  tdProgress.textContent = buku.progres;
  tr.appendChild(tdProgress);

  const tdActions = document.createElement("td");
  const actionDiv = document.createElement("div");

  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.classList.add("update-button");
  updateButton.onclick = () => redirectToUpdatePage(buku.id);
  actionDiv.appendChild(updateButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = () => deleteCatatan(buku.id);
  actionDiv.appendChild(deleteButton);

  tdActions.appendChild(actionDiv);
  tr.appendChild(tdActions);

  return tr;
}

async function deleteCatatan(bukuId) {
  const API_BASE_URL = "http://localhost:2002";

  try {
    const response = await fetch(`${API_BASE_URL}/catatan/${bukuId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Catatan deleted successfully");

      location.reload();
    } else {
      console.error("Failed to delete Catatan");
    }
  } catch (error) {
    console.error("Error deleting catatan:", error);
  }
}

function redirectToUpdatePage(bukuId) {
  window.location.href = `/public/assets/html/update.html?id=${bukuId}`;
}

async function displayCatatanData() {
  const data = await getCatatanDataFromDB();

  if (data.length === 0) {
    console.error("No data to display");
    return;
  }

  const table = document.getElementById("table");

  data.forEach((buku, index) => {
    const tableRow = createCatatanTableRow(buku, index);
    table.appendChild(tableRow);
  });
}

window.onload = displayCatatanData;
