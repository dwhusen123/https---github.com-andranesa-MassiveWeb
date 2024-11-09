function performSearch() {
  const query = document.getElementById("search").value;
  const resultsContainer = document.getElementById("results");

  // Untuk demo, kita hanya menampilkan hasil pencarian sederhana
  resultsContainer.innerHTML = ""; // Hapus hasil sebelumnya

  if (query) {
    resultsContainer.innerHTML = `<p>Mencari: <strong>${query}</strong></p>`;
  } else {
    resultsContainer.innerHTML = "<p>Silakan masukkan kata kunci pencarian.</p>";
  }
}