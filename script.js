// script.js

// Fungsi untuk mengatur tema saat halaman dimuat
function setThemeOnLoad() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        updateToggleButton("Light Mode");
    } else {
        document.body.classList.remove("dark-mode");
        updateToggleButton("Dark Mode");
    }
}

// Fungsi untuk toggle tema dan menyimpan preferensi
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        updateToggleButton("Light Mode");
    } else {
        localStorage.setItem("theme", "light");
        updateToggleButton("Dark Mode");
    }
}

// Fungsi untuk memperbarui teks tombol toggle
function updateToggleButton(text) {
    const toggleButton = document.getElementById("toggleTheme");
    if (toggleButton) {
        toggleButton.textContent = `Toggle ${text}`;
    }
}

// Inisialisasi tema dan tambahkan event listener pada tombol toggle
document.addEventListener("DOMContentLoaded", function() {
    setThemeOnLoad();

    const toggleButton = document.getElementById("toggleTheme");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleTheme);
    }
});